import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { Cake } from './cake.entity';

@Controller('cakes')
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Cake[]> {
    return this.cakesService.findAll();
  }

  @Post()
  create(@Body() cake: Partial<Cake>): Promise<Cake> {
    return this.cakesService.create(cake);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() cake: Partial<Cake>) {
    return this.cakesService.update(id, cake);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cakesService.remove(id);
  }
}
