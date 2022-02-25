import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoffeeModule } from './coffee/coffee.module';
import { CatControllerController } from './cat-controller/cat-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    CoffeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'HzY1314..',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CatControllerController],
  providers: [AppService],
})
export class AppModule {}
