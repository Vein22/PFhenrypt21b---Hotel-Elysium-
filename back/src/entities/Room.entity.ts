import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RoomType } from './RoomType.entity';

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RoomType)
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  @Column()
  roomNumber: string;

  @Column()
  status: string;

  @Column()
  location: string;

  @Column({ default: false })
  isDeleted: boolean;
}
