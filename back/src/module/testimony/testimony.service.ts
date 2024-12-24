import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { Testimony } from 'src/entities/testimony.entity';

@Injectable()
export class TestimonysService {
  constructor(
    @InjectRepository(Testimony)
    private readonly TestimonyRepository: Repository<Testimony>,
  ) {}

  async create(createTestimonyDto: CreateTestimonyDto): Promise<Testimony> {
    const newTestimony = this.TestimonyRepository.create(createTestimonyDto);
    return this.TestimonyRepository.save(newTestimony);
  }

  async findAll(): Promise<Testimony[]> {
    return this.TestimonyRepository.find();
  }

 
  async findOne(id: number): Promise<Testimony> {
    return this.TestimonyRepository.findOne({ where: { id } });
  }


  async update(id: number, updateTestimonyDto: CreateTestimonyDto): Promise<Testimony> {
    await this.TestimonyRepository.update(id, updateTestimonyDto);
    return this.TestimonyRepository.findOne({ where: { id } }); // Actualización correcta
  }

  async remove(id: number): Promise<void> {
    await this.TestimonyRepository.delete(id);
  }
}
