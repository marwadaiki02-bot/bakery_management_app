import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepo.find();
  }

  create(order: Partial<Order>): Promise<Order> {
    const newOrder = this.orderRepo.create(order);
    return this.orderRepo.save(newOrder);
  }
}
