import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/Auth.Modules';
import { UsersModule } from './modules/User.Modules';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
})
export class AppModule {}
