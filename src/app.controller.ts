import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { dtoQuery } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async runQuery(@Body() dto: dtoQuery): Promise<string> {
    return this.appService.runQuery(dto);
  }
}
