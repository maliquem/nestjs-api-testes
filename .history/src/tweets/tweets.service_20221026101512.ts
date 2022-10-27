import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { TweetDocument } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(private tweetModel: Model<TweetDocument>) {}

  async create(createTweetDto: CreateTweetDto) {
    const tweetDoc = new this.tweetModel(createTweetDto);
    await tweetDoc.save();
    return tweetDoc;
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
