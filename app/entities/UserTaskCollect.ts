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

  
    @Field(type => [User], { nullable: true })
    @Property({ ref: () => User })
    user_id?: Ref<User>;

    @Field()
    @Property()
    task_message_online?: string;

    @Field()
    @Property({required: true})
    upload_at?: Date;
    
    @Field()
    @Property()
    isLate?: Boolean;
    
    @Field()
    @Property({default: 0})
    point?: Number;
    



}

export const UserTaskCollectionModel = getModelForClass(UserTaskCollection);
