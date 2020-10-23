import { User } from './User';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";


@ObjectType({ description: "The UserTaskCollection model" })
export class UserTaskCollection {
    @Field(()=> ID)
    id: string;

    @Field() 
    @Property()
    name: string;

    @Field() 
    @Property()
    task_file?: string[];

  
    @Property({ ref: () => User })
    user_id?: Ref<User>;

    @Field()
    @Property()
    task_message_online?: string;

    @Field()
    @Property({required: true,default: new Date().toISOString()})
    upload_at?: string;
    
    @Field()
    @Property()
    isLate?: Boolean;
    
    @Field()
    @Property()
    point?: Number;
    



}

export const ClassModels = getModelForClass(UserTaskCollection);
