import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api')
  getApi(): Record<string, any> {
    return {
      a: 1,
      b: 2,
      version: '1.3.0',
    };
  }

  @Get('/search')
  search(@Query() search): Record<string, any> {
    console.log(search);
    return {
      keyword: search,
      t: Date.now(),
    };
  }
}
