import { Injectable } from '@nestjs/common';
import { dtoQuery } from './app.dto';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class AppService {
  constructor(@InjectClient() private readonly connection: Connection) {}

  async runQuery(dto: dtoQuery) {
    const data = await this.connection.query(dto.query);
    return JSON.stringify(Object.assign([{}], data));
  }
}
