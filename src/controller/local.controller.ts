import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../modules/auth/local.guard';
import { AuthService } from '../service/Auth.Service';

@Controller('local')
export class LocalController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/profile')
  getProfile() {
    console.log('#!');
  }
}
