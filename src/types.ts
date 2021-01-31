import { ObjectType, Field } from 'type-graphql'


@ObjectType()
export class jokeObject {
  @Field()
  created_at?: string;

  @Field()
  icon_url?: string;

  @Field()
  id?: string;

  @Field()
  updated_at?: string;

  @Field()
  url?: string;

  @Field()
  value?: string;

}
