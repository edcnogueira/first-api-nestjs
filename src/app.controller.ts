import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return { name: 'Edjan', country: 'Natal' };
  }

  @Get('/:userId')
  getUserById(@Param() userId: string) {
    return userId;
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
}
