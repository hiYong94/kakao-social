import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUserDto';
import User from '../entities/User';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @HttpCode(200)
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    await this.userService.create(createUserDto);
    return true;
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    await this.userService.remove(id);
    return true;
  }
}
