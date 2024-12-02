import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiTags('Auth')

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() userLogin: LoginUserDto) {
    return this.authService.signIn(userLogin);
  }
}
