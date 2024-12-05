import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './Client.entity';
import { Room } from './Room.entity';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @Column('date')
  checkInDate: string;

  @Column('date')
  checkOutDate: string;

  @Column()
  reservationStatus: string;

  @Column('decimal')
  total: number;

  @Column({ default: false })
  isDeleted: boolean;
}
