import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import env from './config/database';
import { User } from './entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.mysql.host,
      port: +env.mysql.port,
      username: env.mysql.username,
      password: env.mysql.password,
      database: env.mysql.db,
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
