import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CakesModule } from './cakes/cakes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Cake } from './cakes/cake.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bakery.sqlite',
      entities: [User, Cake],
      synchronize: true, // ⚠️ pratique en dev, à éviter en prod
    }),
    AuthModule, UsersModule, CakesModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
