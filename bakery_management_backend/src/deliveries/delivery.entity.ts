import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ default: 'pending' })
  status: string; // pending / in-progress / delivered

  @ManyToOne(() => Order, { eager: true })
  order: Order;
}
