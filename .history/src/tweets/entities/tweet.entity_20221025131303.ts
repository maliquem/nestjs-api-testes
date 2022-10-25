import { Prop, Schema } from '@nestjs/mongoose';

export type TweetProps = {
  content: string;
  screen_name: string;
};

@Schema()
export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  @Prop()
  content: string;

  @Prop()
  screen_name: string;
}
