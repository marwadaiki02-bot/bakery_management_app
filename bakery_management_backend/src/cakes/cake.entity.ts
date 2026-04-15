import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;
}
