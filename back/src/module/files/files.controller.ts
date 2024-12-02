import { Controller, Param, UploadedFile, Body, UsePipes} from '@nestjs/common';
import { Post, UseInterceptors, Get, Put, } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ImageValidatorPipe } from 'src/pipes/imageValidatorPipe';
import { FilesService } from './files.service';
import { replaceImageSchema, updateMetadataSchema } from './files.swagger.schemas';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService) {}
  @ApiTags('Files')


  @Post('uploadImage')
  @UsePipes(ImageValidatorPipe)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Subir una imagen a Cloudinary. Solo se permiten imágenes JPEG, PNG, JPG y WEBP con un tamaño máximo de 2 MB.',
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary', 
        },
      },
    },
  })
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = await this.filesService.uploadImage(file)
    return { url: result.secure_url, public_id: result.public_id };
  }


  @Get('images/:query')
  async getImages(@Param('query') query: string) {
    const images = await this.filesService.getImages(query);
    return images;
  }

  
  @ApiBody(updateMetadataSchema)
  @Put('updateImageMetaData')
  async updateImageMetaData(@Body() body: { public_id: string; metadata: Record<string, string> }) {
    const updatedImage = await this.filesService.updateImageMetadata(body.public_id, body.metadata);
    return updatedImage;
}


  @Put('replaceImage')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody(replaceImageSchema)
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