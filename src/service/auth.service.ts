import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  kakaoLogin(req) {
    if (!req) {
      return 'No user from google';
    }
    return req;
  }
}
