import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';

describe('Tweet Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Luiz Carlos',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Luiz Carlos');
  });

  it('create a tweet document', async () => {
    const conn = await mongoose.connect(
      'mongodb://admin:admin@mongo:27017/tweet_test?authSource=admin',
    );

    const TweetModel = conn.model('Tweet', TweetSchema);
    const tweet = new TweetModel({
      content: 'Hello World',
      screen_name: 'Luiz Carlos',
    });

    await tweet.save();
  });
});
