import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_type')
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
