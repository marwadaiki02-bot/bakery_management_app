import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { Delivery } from './delivery.entity';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Get()
  findAll(): Promise<Delivery[]> {
    return this.deliveriesService.findAll();
  }

  @Post()
  create(@Body() delivery: Partial<Delivery>): Promise<Delivery> {
    return this.deliveriesService.create(delivery);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() delivery: Partial<Delivery>) {
    return this.deliveriesService.update(id, delivery);
  }
}
