import { Controller, Param, UploadedFile, Body, UsePipes} from '@nestjs/common';
import { Post, UseInterceptors, Get, Put, } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageValidatorPipe } from 'src/pipes/imageValidatorPipe';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
  ) {}


  @Post('uploadImage')
  @UsePipes(ImageValidatorPipe)
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = await this.filesService.uploadImage(file)
    return { url: result.secure_url, public_id: result.public_id };
  }

  @Get('images/:query')
  async getImages(@Param('query') query: string) {
    const images = await this.filesService.getImages(query);
    return images;
  }

  @Put('updateImage')
  async updateImage(@Body() body: { public_id: string; metadata: Record<string, string> }) {
    const updatedImage = await this.filesService.updateImageMetadata(body.public_id, body.metadata);
    return updatedImage;
}

@Put('replaceImage')
@UseInterceptors(FileInterceptor('image'))
async replaceImage(
  @UploadedFile(new ImageValidatorPipe()) file: Express.Multer.File,
  @Body('public_id') public_id: string,
) {
  if (!public_id) {
    throw new Error('El public_id es obligatorio');
  }

  const result = await this.filesService.replaceImage(file, public_id);
  return { url: result.secure_url, public_id: result.public_id };
}
}