import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect, Connection } from 'amqplib';
import { fromEventPattern } from 'rxjs';
import { ConsumeMessage } from 'amqplib/properties';

@Injectable()
export class RabbitmqService implements OnModuleInit, OnModuleDestroy {
  private connection: Connection;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('rabbit.url');
    connect(url).then((connection) => (this.connection = connection));
  }

  async onModuleInit() {
    // const channel = await this.connection.createChannel();
    // await channel.assertExchange('logs', 'direct');
    //
    // const queue = await channel.assertQueue('', { exclusive: true });
    //
    // await channel.bindQueue(queue.queue, 'logs', 'assignment');
    //
    // await channel.consume(
    //   queue.queue,
    //   (msg) => {
    //     const content = msg.content.toString();
    //   },
    //   {
    //     noAck: true,
    //   },
    // );
  }

  public async bindExchange(
    exchange: string,
    type: 'direct' | 'topic' | 'headers' | 'fanout' | 'match',
    pattern: string,
    callback: (msg: ConsumeMessage | null) => void,
  ) {
    const channel = await this.connection.createChannel();
    await channel.assertExchange(exchange, type);
    const queue = await channel.assertQueue('', { exclusive: true });
    await channel.bindQueue(queue.queue, exchange, pattern);

    await channel.consume(queue.queue, callback);
  }

  async onModuleDestroy() {
    await this.connection.close();
  }
}
