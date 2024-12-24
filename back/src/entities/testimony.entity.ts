import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testimony {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'int', default: 0 })
  rating: number;
}
