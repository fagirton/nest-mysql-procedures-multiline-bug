import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

@Module({
  imports: [
    MysqlModule.forRootAsync({
      useFactory: () => ({
        host: 'localhost',
        database: 'test',
        password: 'verylongpassword123',
        user: 'test',
        port: 3306,
      }),
    }),
  ],
})
export class MysqlDbModule {}