import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.Module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log(`Listening Server 3000 !`));
};

bootstrap();
