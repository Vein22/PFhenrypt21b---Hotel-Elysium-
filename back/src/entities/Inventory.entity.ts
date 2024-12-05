import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Room } from './Room.entity';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @Column()
  item: string;

  @Column('int')
  quantity: number;

  @Column()
  status: string;

  @Column({ default: false })
  isDeleted: boolean;
}
