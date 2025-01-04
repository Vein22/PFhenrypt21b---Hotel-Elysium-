import { Controller, Post, Delete, Get, Body, Param, Query, HttpCode, HttpStatus, UploadedFile, UseInterceptors, BadRequestException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from 'src/entities/Room.entity';
import { ApiBody, ApiConsumes, ApiTags, ApiResponse } from '@nestjs/swagger';

import { ImageValidatorPipe } from 'src/pipes/imageValidatorPipe';
import { JwtAuthGuard } from 'src/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';


@Controller('rooms')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @ApiTags('Rooms')


  @Post('registerRoom')
  @HttpCode(HttpStatus.CREATED)

  @ApiBody({ type: CreateRoomDto })
  @ApiResponse({ status: 201, description: 'Room created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Roles('Administrador')
  @Post('registerRoom')
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);

  }


  @Get('getRooms')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'Retrieved all rooms.' })
  async getAllRooms(@Query('page') page: number=1, @Query('limit') limit: number=5): Promise<Room[]> {
    return this.roomsService.getAllRooms(page, limit);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) 
  async deleteRoomById(@Param('id') id: string) {
    return this.roomsService.deleteRoomById(id);
  }
}
