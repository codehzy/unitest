import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 白名单
      whitelist: true,
      // 白名单报错
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
