import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user.modules';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
