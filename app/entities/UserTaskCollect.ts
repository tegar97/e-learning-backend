import { User } from './User';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";

@ObjectType({ description: "The Time Line model" })
export class fileDoc2 {
    @Field()
    file_name: string;

    @Field()
    file_type: string;

   
}
@ObjectType({ description: "The UserTaskCollection model" })
export class UserTaskCollection {
    @Field(()=> ID)
    id: string;

    @Field(type => [fileDoc2], { nullable: true })
    @Property({type: [fileDoc2]})
    task_file?: fileDoc2[];

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
    user_email?: string;


    @Field()
    @Property()
    task_message_online?: string;

    @Field()
    @Property({required: true})
    upload_at?: Date;
    
    @Field()
    @Property()
    isLate?: Boolean;
    
    @Field({nullable: true}) 
    @Property({default: null})
    point?: Number;

    
    



}

export const UserTaskCollectionModel = getModelForClass(UserTaskCollection);
