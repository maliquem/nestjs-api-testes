import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(async () => {
    const uri = 
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a tweet', () => {
    const tweet = service.create({
      content: 'Hello World',
      screen_name: 'Luiz Carlos',
    });
    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Luiz Carlos');
  });
});
