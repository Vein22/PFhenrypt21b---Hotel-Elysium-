import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
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
}
