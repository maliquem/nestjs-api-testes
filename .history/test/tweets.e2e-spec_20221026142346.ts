describe('TweetController (e2e)', () => {
  beforeEach(() => {
    const uri =
      'mongodb://admin:admin@mongo:27017/tweet_service_test?authSource=admin';
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
      ],
      providers: [TweetsService],
    }).compile();
  });
});
