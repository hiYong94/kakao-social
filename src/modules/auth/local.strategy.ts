import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../service/Auth.Service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'nickName',
    });
  }

  async validate(nickName: string, password?: undefined): Promise<any> {
    console.log('local.strategy: ', nickName, password);
    const user = await this.authService.validateUser(nickName);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
