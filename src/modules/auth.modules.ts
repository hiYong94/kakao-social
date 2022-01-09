import { Module } from '@nestjs/common';
import { KakaoStrategy } from 'src/modules/auth/kakao.strategy';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../service/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, KakaoStrategy],
})
export class AuthModule {}
