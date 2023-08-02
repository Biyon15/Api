import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './module/register/register.controller';
import { RegisterModule } from './module/register/register.module';

@Module({
  imports: [RegisterModule],
  controllers: [AppController,RegisterController],
  providers: [AppService],
})
export class AppModule {}
