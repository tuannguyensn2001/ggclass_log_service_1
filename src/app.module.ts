import { Module } from '@nestjs/common';
import { AssignmentModule } from './services/assignment/assignment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'src/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitmqModule } from './providers/rabbitmq/rabbitmq.module';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    AssignmentModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get<string>('mongo.url'),
        };
      },
    }),
    RabbitmqModule,
    GrpcReflectionModule.register({
      transport: Transport.GRPC,
      options: {
        package: 'assignment',
        protoPath: join(__dirname, 'proto/assignment.proto'),
        url: '0.0.0.0:50051',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
