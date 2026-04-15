import { Module } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { CakesController } from './cakes.controller';
import { Cake } from './cake.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cake])],
  providers: [CakesService],
  controllers: [CakesController]
})
export class CakesModule {}
