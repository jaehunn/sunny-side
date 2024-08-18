import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  hmr(app);
}

/** @see {docs} https://docs.nestjs.com/recipes/hot-reload#hot-module-replacement */
function hmr(app: INestApplication<any>) {
  if (module.hot != null) return;

  module.hot.accept();
  module.hot.dispose(() => app.close());
}

bootstrap();
