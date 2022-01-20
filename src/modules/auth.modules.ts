import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controller/auth.controller';
import { LocalController } from '../controller/local.controller';
import { LocalStrategy } from './auth/local.strategy';
import { KakaoStrategy } from './auth/kakao.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../entities/User';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../service/User.Service';
import { UserRepository } from '../repository/User.Repository';
import { AuthService } from '../service/Auth.Service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User, UserRepository]),
    JwtModule.register({
      secret: 'abc',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController, LocalController],
  providers: [
    AuthService,
    UserService,
    KakaoStrategy,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
