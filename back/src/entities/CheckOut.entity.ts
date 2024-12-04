import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reservation } from './Reservation.entity';

@Entity('checkout')
export class CheckOut {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Reservation)
  @JoinColumn({ name: 'reservation_id' })
  reservation: Reservation;

  @Column('datetime')
  timestamp: Date;

  @Column()
  notes: string;

  @Column('decimal')
  additionalCharges: number;
}
