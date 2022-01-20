import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    /**
     * JWT 추출 방법, API 요청시 Authorization headers
     * JWT 만료 validate
     * 토큰 대칭 암호화 키
     */
    super({
      usernameField: 'nickName',
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      // secretOrKey: 'abc',
    });
  }

  async validate(payload: any): Promise<any> {
    console.log('#jwt.strategy', payload);
    return { userId: payload.sub, username: payload.username };
  }
}
