import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cake } from '../cakes/cake.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Cake, { eager: true })
  cake: Cake;
}
