import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';

describe('Tweet Tests', () => {
  describe('Tweet Tests', () => {
    it('should create a tweet', () => {
      const tweet = new Tweet({
        content: 'Hello World',
        screen_name: 'Luiz Carlos',
      });

      expect(tweet.content).toBe('Hello World');
      expect(tweet.screen_name).toBe('Luiz Carlos');
    });
  });

  describe('Using MongoDB', () => {
    let conn: mongoose.Mongoose;

    beforeEach(async () => {
      conn = await mongoose.connect(
        'mongodb://admin:admin@localhost:27017/tweet_service_test?authSource=admin',
      );
    });

    afterEach(async () => {
      await conn.disconnect();
    });
    it('create a tweet document', async () => {
      const TweetModel = conn.model('Tweet', TweetSchema);
      const tweet = new TweetModel({
        content: 'Hello World',
        screen_name: 'Luiz Carlos',
      });

      await tweet.save();

      const tweetCreated = await TweetModel.findById(tweet._id);

      expect(tweetCreated.content).toBe('Hello World');
      expect(tweetCreated.screen_name).toBe('Luiz Carlos');
    });
  });
});
