import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/user.controller';
import User from '../entities/User';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
