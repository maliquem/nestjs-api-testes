import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('TweetController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const uri =
      'mongodb://admin:admin@mongo:27017/tweet_service_test?authSource=admin';
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
  });

  afterEach(async () => {
    if (app) {
      await app.close();
    }
  });
});
