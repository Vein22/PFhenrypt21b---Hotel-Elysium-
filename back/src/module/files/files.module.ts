import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { ImageValidatorPipe } from 'src/pipes/imageValidatorPipe';
import { FilesController } from 'src/module/files/files.controller';
import { FilesService } from 'src/module/files/files.service';


@Module({
  imports: [ConfigModule],
  providers: [FilesService, CloudinaryConfig, ImageValidatorPipe],
  controllers: [FilesController],
  exports: [FilesService]
})
export class FilesModule {}
