import { Module } from '@nestjs/common';
import { AssignmentModule } from './services/assignment/assignment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'src/config';
import { MongooseModule } from '@nestjs/mongoose';

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
        console.log(config.get<string>('mongo.url'));
        return {
          uri: config.get<string>('mongo.url'),
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
