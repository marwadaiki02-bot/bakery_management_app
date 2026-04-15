import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from './delivery.entity';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(Delivery)
    private deliveryRepo: Repository<Delivery>,
  ) {}

  findAll(): Promise<Delivery[]> {
    return this.deliveryRepo.find();
  }

  create(delivery: Partial<Delivery>): Promise<Delivery> {
    const newDelivery = this.deliveryRepo.create(delivery);
    return this.deliveryRepo.save(newDelivery);
  }

  update(id: number, delivery: Partial<Delivery>): Promise<any> {
    return this.deliveryRepo.update(id, delivery);
  }
}
