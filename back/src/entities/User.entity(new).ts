import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserType } from './UserType.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserType)
  @JoinColumn({ name: 'user_type_id' })
  userType: UserType;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column('date')
  registrationDate: string;
}
