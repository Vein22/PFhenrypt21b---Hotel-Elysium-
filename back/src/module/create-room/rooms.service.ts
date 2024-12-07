import { Injectable } from '@nestjs/common';
import { Room } from 'src/entities/Room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(
    private readonly roomRepository: RoomsRepository,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto, image: Express.Multer.File): Promise<Room> {
    return await this.roomRepository.createRoom(createRoomDto, image);
  }

  
  async getAllRooms(page: number, limit: number): Promise<Room[]> {
    return this.roomRepository.getAllRooms(page, limit);
  }


  async deleteRoomById(id: string): Promise<any> {
    await this.roomRepository.deleteRoomById(id); 
  }
}
