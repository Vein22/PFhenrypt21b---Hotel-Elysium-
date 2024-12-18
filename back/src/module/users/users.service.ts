import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async searchUsersByName(search: string): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('LOWER(user.name) LIKE LOWER(:search)', { search: `%${search}%` })
      .getMany();
  }

  async findUsers() {
    return await this.userRepository.find();
  }

  async findUsersById(id: string) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['reservations'],
    });
  }
}