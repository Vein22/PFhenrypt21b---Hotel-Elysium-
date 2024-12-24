import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Testimony } from 'src/entities/testimony.entity';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { TestimonysService } from './testimony.service';

@ApiTags('Testimonys')
@Controller('testimonys')
export class TestimonyController {
  constructor(private readonly testimoniosService: TestimonysService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo testimonio' })
  @ApiResponse({ status: 201, description: 'Testimonio creado exitosamente.' })
  async create(@Body() createTestimonioDto: CreateTestimonyDto): Promise<Testimony> {
    return this.testimoniosService.create(createTestimonioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los testimonios' })
  @ApiResponse({ status: 200, description: 'Lista de testimonios.' })
  async findAll(): Promise<Testimony[]> {
    return this.testimoniosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un testimonio por ID' })
  @ApiResponse({ status: 200, description: 'Testimonio encontrado.' })
  async findOne(@Param('id') id: number): Promise<Testimony> {
    return this.testimoniosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un testimonio por ID' })
  @ApiResponse({ status: 200, description: 'Testimonio actualizado.' })
  async update(
    @Param('id') id: number,
    @Body() updateTestimonioDto: CreateTestimonyDto,
  ): Promise<Testimony> {
    return this.testimoniosService.update(id, updateTestimonioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un testimonio por ID' })
  @ApiResponse({ status: 200, description: 'Testimonio eliminado.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.testimoniosService.remove(id);
  }
}
