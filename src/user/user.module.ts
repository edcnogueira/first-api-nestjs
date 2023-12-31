import { Module } from '@nestjs/common';
import { UserController } from './controller/controller.module';
import { UserService } from './service/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
