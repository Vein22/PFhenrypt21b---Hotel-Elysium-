import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;


   /**
   * El nombre del usuario.
   * @example John Doe
   */
 @ApiProperty({
    example: 'John Doe',
    description: 'El nombre del usuario.'
  })
  @Column({length: 50, nullable: false})
  name: string;


   /**
   * El correo electrónico del usuario.
   * @example user@example.com
   */
   @ApiProperty({
    example: 'user@example.com',
    description: 'El correo electrónico del usuario.'
  })
  @Column({length:15 ,nullable: false, unique: true})
  email: string;


    /**
     * La contraseña debe ser dificil de descifrar.
     * @example Strong!Pass1
     */
  @ApiProperty({
    example: 'Strong!Pass1',
    description: 'La contraseña debe ser difícil de descifrar.'
  })
  @Column({length: 15, nullable: false})
  password: string;


    /**
     * Número de telefono personal.
     * @example 58 214 378 6342.
     */
  @ApiProperty({
    example: '58 214 378 6342',
    description: 'Número de telefono personal.'
  })
  @Column({nullable: false })
  phone: number;


    /**
     * Número de DNI personal.
     * @example 28099578.
     */
  @ApiProperty({
    example: '28099578',
    description: 'Número de DNI personal.'
  })
  @Column()
  dni: number;


    /**
     * Pais residente.
     * @example Argentina.
     */
  @ApiProperty({
    example: 'Argentina.',
    description: 'Pais residente.'
  })
  @Column({length: 50})
  country: string;


    /**
     * Dirección de domicilio.
     * @example SnowValley sector 8 calle 3 casa 21.
     */
  @ApiProperty({
    example: 'SnowValley sector 8 calle 3 casa 21.',
    description: 'Dirección de domicilio.'
  })
  @Column({length: 50})
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}