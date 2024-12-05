import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';
import { Role } from './Role.entity';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column()
  identificationDocument: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column({ default: false })
  isDeleted: boolean;
}
