import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('room_type')
export class RoomType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  basePrice: number;

  @Column('int')
  maxCapacity: number;

  @Column()
  description: string;

  @Column({ default: false })
  isDeleted: boolean;
}
