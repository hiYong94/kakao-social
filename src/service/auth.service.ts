import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import User from '../entities/User';
import { UserService } from './User.Service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nickName: string): Promise<any> {
    const user = await this.userService.findOne(nickName);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    console.log('Auth.SErvice: login');
    const payload = { nickName: user.nickName };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // kakaoLogin(req) {
  //   if (!req) {
  //     return 'No user from google';
  //   }
  //   return req;
  // }
}
