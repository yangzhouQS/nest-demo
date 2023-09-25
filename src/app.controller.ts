import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

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

  @Post('/search')
  @HttpCode(204) // 状态码
  @Header('Cache-Control', 'none') //  响应头设置
  @Header('user-id', '10086') //  响应头设置
  search(
    @Query() search,
    @Req() request: Request,
    @Body() body: any,
  ): Record<string, any> {
    console.log(search);
    // console.log(request);
    console.log(body);
    return {
      body: body,
      keyword: search,
      t: Date.now(),
    };
  }




  @Post('/mp-configuration/get-custom-config')
  getCustomConfig() {
    return this.appService.getCustomConfig();
  }
  @Post('/mp-configuration/table-config-panel')
  getTableConfigPanel() {
    return this.appService.getTableConfigPanel();
  }
  @Post('/assem/page-assem-models')
  getAssemModel() {
    return this.appService.getAssemModel();
  }
}
