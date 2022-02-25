import { Inject, Injectable, Optional } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

// 构造函数的方法注入
@Injectable()
// 提供者
export class CatsService {
  constructor(@Inject('Http_options') private httpClient) {}
  // @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T,

  private readonly cats: Cat[] = [];

  create(cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
