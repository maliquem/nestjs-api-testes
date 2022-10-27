import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('TweetController (e2e)', () => {
  beforeEach(async () => {
    const uri =
      'mongodb://admin:admin@mongo:27017/tweet_service_test?authSource=admin';
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
});
