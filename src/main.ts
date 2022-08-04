import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'assignment',
        protoPath: join(__dirname, 'proto/assignment.proto'),
        url: '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
}

bootstrap();
