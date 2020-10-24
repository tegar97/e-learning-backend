import { UserTaskCollection } from './UserTaskCollect';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";
import {User} from './User'


@ObjectType({ description: "The Time Line model" })
export class fileDoc {
    @Field()
    file_name: string;

    @Field()
    file_type: string;

   
}
@ObjectType({ description: "The Time Line model" })
export class TimeLine {
    @Field(()=> ID)
    id: string;
    
    @Field()
    @Property()
    content_title?: string;

       
    @Field()
    @Property()
    class_id!: string;
 
    @Field()
    @Property()
    content?: string;

    @Field(type => [fileDoc], { nullable: true })
    @Property({type: [fileDoc]})
    file?: fileDoc[]

    @Field()
    @Property()
    type_content?: string;

    @Field()
    @Property()
    due?: Date;

    @Field()
    @Property()
    point?: number;

    @Field(type => [UserTaskCollection], { nullable: false })
    @Property({type : () => [UserTaskCollection]})
    user_collect?: string[]

 

    @Field(type => User, { nullable: false })
    @Property({ref : () => User})
    created_by : Ref<User>

    @Field()
    @Property({required: true})
    createdAt?: string;

    
    @Field()
    @Property({required: true,default: new Date().toISOString()})
    updateAt?: string;




}

export const TimeLineModels = getModelForClass(TimeLine);
