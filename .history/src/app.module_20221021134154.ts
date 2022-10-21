import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsController } from './tweets/tweets.controller';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [],
  controllers: [AppController, TweetsController],
  providers: [AppService],
})
export class AppModule {}
