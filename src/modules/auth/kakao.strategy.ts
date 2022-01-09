import { Strategy } from 'passport-kakao';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config();

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_REDIRECT_URL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    console.log('#accessToken', accessToken);
    console.log('#refreshToken', refreshToken);
    console.log('#profile', profile);
    console.log('#done', done);
    // const nickName = profile._json.properties.nickname;
    // const socialType = profile.provider;

    // 유저가 있을때
    console.log('로그인 토큰 발급');
    // const access_token = await this.authService.createLoginToken(user);
    // const refresh_token = await this.authService.createRefreshToken(user);
    // return { access_token, type: 'login' };
  }
}
