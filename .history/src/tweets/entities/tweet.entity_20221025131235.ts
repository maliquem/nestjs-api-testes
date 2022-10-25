import { Prop } from '@nestjs/mongoose';

export type TweetProps = {
  content: string;
  screen_name: string;
};

export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  @Prop()
  content: string;

  @Prop()
  screen_name: string;
}
