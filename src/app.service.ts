import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get()
  getUser() {
    return { name: 'Edjan', country: 'Natal' };
  }
}
