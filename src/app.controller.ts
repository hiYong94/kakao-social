import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('kakao')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}
