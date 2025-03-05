import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AllExceptionFilter } from './exception/exception.filter';
import { OTHER_PORT, OTHER_URL } from './config/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: OTHER_URL,
      port: OTHER_PORT,
    },
  });
  app.useGlobalFilters(new AllExceptionFilter());
  app.listen();
  Logger.log(`🚀 Other Microservice is Running in ${OTHER_URL}:${OTHER_PORT}`);
}
bootstrap();
