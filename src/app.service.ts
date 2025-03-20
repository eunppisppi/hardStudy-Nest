import { Injectable } from '@nestjs/common';
import { eungwan } from './app.type';

@Injectable()
export class AppService {
  getHello(): eungwan {
    return { jm: true, ym: false };
  }
}
