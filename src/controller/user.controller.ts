import { Controller, Get, HttpCode } from '@nestjs/common';
import { User } from '../entities/User';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @HttpCode(200)
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }
}
