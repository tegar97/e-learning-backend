import { UserTaskCollection } from './UserTaskCollect';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";
import {User} from './User'

@ObjectType({ description: "The Time Line model" })
export class TimeLine {
    @Field(()=> ID)
    id: string;
    
    @Field()
    content_title?: string;

    @Field()
    content!: string;

    @Field()
    @Property()
    file?: string[];

    @Field()
    type_content?: string;

    @Field()
    due?: string;

    @Field()
    point?: number;

    @Property({ ref: () => UserTaskCollection })
    user_collect?: Ref<UserTaskCollection[]>;

    @Field()
    @Property({ref : () => User})
    create_by : User

    @Field()
    @Property({required: true,default: new Date().toISOString()})
    createdAt?: string;

    
    @Field()
    @Property({required: true,default: new Date().toISOString()})
    updateAt?: string;




}

export const TimeLineModels = getModelForClass(TimeLine);
