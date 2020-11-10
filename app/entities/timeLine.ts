import { UserTaskCollection } from './UserTaskCollect';
import { ObjectType, Field, ID, Root} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";
import {User} from './User'
import { type } from 'express/lib/response';



@ObjectType({ description: "The Time Line model" })
export class fileDoc {
    @Field()
    file_name: string;

    @Field()
    file_type: string;

   
}

@ObjectType({ description: "The Time Line model" })
export class Comments {

    @Field(()=> ID)
    id: string;
    
    @Field()
    @Property()
    user_id?: string;

    @Field()
    @Property()
    user_name?: string;

    @Field()
    @Property()
    user_photo?: string;

    @Field()
    @Property()
    content: string;

    @Field()
    @Property({type: Date})
    createdAt: Date;

   
}
@ObjectType({ description: "The Time Line model" })
export class TimeLine {
    @Field(()=> ID)
    id: string;
    
    @Field()
    @Property({required: false})
    content_title?: string;

       
    @Field()
    @Property()
    class_id!: string;
 
    @Field()
    @Property()
    content?: string;

    @Field({nullable: true})
    @Property()
    file: string

    @Field()
    @Property()
    type_content?: string;

    @Field({nullable: true})
    @Property()
    due?: String;

    @Field({nullable: true})
    @Property({default: true})
    isActive?: Boolean;

    @Field()
    @Property()
    point?: number;

    @Field(type => [UserTaskCollection], { nullable: false })
    @Property({type : () => [UserTaskCollection]})
    user_collect?: string[]

    @Field(type => [Comments], { nullable: false })
    @Property({type : () => [Comments]})
    comments : string[]

   

    @Field(type => User, { nullable: false })
    @Property({ref : () => User})
    created_by : Ref<User>


    @Field()
    @Property({required: true})
    createdAt?: Date;

    
    @Field()
    @Property({required: true,default: new Date().toISOString()})
    updateAt?: string;
    _doc: any;

   



}

export const TimeLineModels = getModelForClass(TimeLine);
