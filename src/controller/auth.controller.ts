import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { KakaoAuthGuard } from '../modules/auth/kakao.guard';

@Controller('auth')
export class AuthController {
  // constructor(private readonly authService: AuthService) {}
  @Get('/')
  @UseGuards(KakaoAuthGuard)
  async kakaoAuth(@Req() req) {
    console.log('request', req);
  }

  // 카카오 로그인 API
  @UseGuards(KakaoAuthGuard)
  @Get('/kakao')
  async kakaoLogin() {
    return;
  }

  // 카카오 로그인시 콜백 라우터
  @UseGuards(KakaoAuthGuard)
  @Get('/kakao/callback')
  kakaoAuthRedirect(@Req() req, @Res() res) {
    if (req.user.type === 'login') {
      res.cookie('access_token', req.user.access_token);
      res.cookie('refresh_token', req.user.refresh_token);
    } else {
      res.cookie('once_token', req.user.once_token);
    }
    res.end();
  }

  // 로그인
  // @UseGuards(JwtAuthGuard)
  @Post('/login')
  async registUser(
    @Request() req: any,
    // @Body() registUserDTO: RegistUserDTO,
    @Res() res: any,
  ) {
    try {
      const { user } = req.user;
      console.log('controeller', user);
      // const { user_tel, user_privacy } = registUserDTO;
    } catch (error) {
      console.log(error);
    }
    // 그 외의 경우
    return false;
  }
}
