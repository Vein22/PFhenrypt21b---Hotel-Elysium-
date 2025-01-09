import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsService } from 'src/module/create-room/rooms.service';
import { RoomsController } from 'src/module/create-room/rooms.controller';
import { Room } from 'src/entities/Room.entity';
import { FilesModule } from 'src/module/files/files.module';
import { RoomsRepository } from 'src/module/create-room/rooms.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Room]), FilesModule],
  controllers: [RoomsController],
  providers: [RoomsService, RoomsRepository],
  exports: [RoomsRepository]
})
export class RoomsModule {}
