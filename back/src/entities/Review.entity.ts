import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './Client.entity';
import { Room } from './Room.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @Column('int')
  rating: number;

  @Column()
  text: string;

  @Column('date')
  date: string;

  @Column({ default: false })
  isDeleted: boolean;
}
