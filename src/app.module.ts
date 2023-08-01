import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [BookmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
