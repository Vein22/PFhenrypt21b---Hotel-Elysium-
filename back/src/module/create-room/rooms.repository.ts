import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "src/entities/Room.entity";
import { Repository } from "typeorm";
import { FilesService } from "../files/files.service";
import { CreateRoomDto } from "./dto/create-room.dto";


@Injectable()
export class RoomsRepository {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
        private readonly filesService: FilesService
    ){}

   
  async createRoom(createRoomDto: Partial<Room>): Promise<Room> {
    const room = this.roomRepository.create(createRoomDto);
    return await this.roomRepository.save(room);
  }
    

    async getAllRooms(page: number, limit: number): Promise<Room[]> {
        return this.roomRepository.find({
          where: { isDeleted: false },
          take: limit,
          skip: (page - 1) * limit,
        });
      }


    async deleteRoomById(id: string): Promise<void> {    
        await this.roomRepository.delete(id), { isDeleted: false }; 
    }

    
    async findById(id: string): Promise<Room | null> {
        return await this.roomRepository.findOne({ where: { id, isDeleted: false } });
      }


    async findByTitle(title: string): Promise<Room | null> {
     return this.roomRepository.findOne({ where: { title } });
  }
}