import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cake } from './cake.entity';

@Injectable()
export class CakesService {
  constructor(
    @InjectRepository(Cake)
    private cakeRepo: Repository<Cake>,
  ) {}

  findAll(): Promise<Cake[]> {
    return this.cakeRepo.find();
  }

  create(cake: Partial<Cake>): Promise<Cake> {
    const newCake = this.cakeRepo.create(cake);
    return this.cakeRepo.save(newCake);
  }

  update(id: number, cake: Partial<Cake>): Promise<any> {
    return this.cakeRepo.update(id, cake);
  }

  remove(id: number): Promise<any> {
    return this.cakeRepo.delete(id);
  }
}
