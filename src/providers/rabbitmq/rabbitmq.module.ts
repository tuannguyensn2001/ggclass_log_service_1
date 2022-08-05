import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [RabbitmqService],
  imports: [ConfigModule],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
