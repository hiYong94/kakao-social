import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth.modules';
import { UsersModule } from './modules/user.modules';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
})
export class AppModule {}
