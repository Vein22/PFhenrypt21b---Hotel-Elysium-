
import { Injectable, BadRequestException } from '@nestjs/common';

import { Room } from 'src/entities/Room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(
    private readonly roomRepository: RoomsRepository,
  ) {}


  
  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const existingRoom = await this.roomRepository.findByTitle(createRoomDto.title);
    if (existingRoom) {
      throw new BadRequestException(`Ya existe una habitación con el título "${createRoomDto.title}".`);
    }

    if (createRoomDto.price < 10) {
      throw new BadRequestException('El precio debe ser mayor a 10.');
    }

    return await this.roomRepository.createRoom(createRoomDto);
  }
  

  
  async getAllRooms(page: number, limit: number): Promise<Room[]> {
    return this.roomRepository.getAllRooms(page, limit);
  }



  async deleteRoomById(id: string): Promise<void> {

    const room = await this.roomRepository.findById(id);
    if (!room) {
      throw new Error('No se encontró la habitación especificada.');
    }


    await this.roomRepository.deleteRoomById(id); 
  }
}
