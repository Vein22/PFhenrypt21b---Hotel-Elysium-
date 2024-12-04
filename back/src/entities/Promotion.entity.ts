import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column('decimal')
  discount: number;

  @Column('date')
  startDate: string;

  @Column('date')
  endDate: string;
}
