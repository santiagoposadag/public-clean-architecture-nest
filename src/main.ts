import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log("Startign the app");
  const app = await NestFactory.create(AppModule);
  console.log("The app was created succesfully");
  await app.listen(3001);
  console.log( `running on: ${await app.getUrl()} estamos ready papa`)
}
bootstrap();
