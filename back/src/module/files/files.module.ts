import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';


@Module({
  imports: [ConfigModule],
  providers: [FilesService, CloudinaryConfig],
  controllers: [FilesController],
})
export class FilesModule {}
