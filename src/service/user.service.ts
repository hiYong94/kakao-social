import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/CreateUserDto';
import User from '../entities/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<boolean> {
    const { name } = createUserDto;

    const newUser = new User();
    newUser.name = name;
    await this.userRepository.save(newUser);

    return true;
  }

  async remove(id: string): Promise<boolean> {
    await this.userRepository.delete(id);
    return true;
  }
}
