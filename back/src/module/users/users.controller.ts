import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SearchUserDto } from '../users/dto/search-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Buscar usuarios por coincidencia en el nombre' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios coincidentes',
  })
  @ApiResponse({
    status: 400,
    description: 'Error de validación en el parámetro de búsqueda',
  })
  async searchUsers(@Query() searchUserDto: SearchUserDto) {
    return this.usersService.searchUsersByName(searchUserDto.search);
  }

  @Get('clientlist')
  @HttpCode(HttpStatus.OK)
  async findUsers() {
    return this.usersService.findUsers();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findUsersById(@Param('id', ParseUUIDPipe) id: string) {
    const user = await this.usersService.findUsersById(id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }
}