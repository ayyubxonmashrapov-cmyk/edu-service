import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaaModule } from './config/db/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : '.env',
      isGlobal: true
    }),
    PrismaaModule
  ],
})
export class AppModule {}
