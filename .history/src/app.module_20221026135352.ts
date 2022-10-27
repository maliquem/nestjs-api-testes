import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

const uri =
  'mongodb://admin:admin@localhost:27017/tweet_entity_test?authSource=admin';

@Module({
  imports: [MongooseModule.forRoot(uri), TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
