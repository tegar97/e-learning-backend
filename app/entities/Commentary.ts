import { User } from './User';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";


@ObjectType({ description: "The UserTaskCollection model" })
export class Commentary {
    @Field(()=> ID)
    id: string;

    @Field(type => User, { nullable: true })
    @Property({ ref: () => User })
    user_id?: Ref<User>;


    @Field()
    @Property()
    content: string


    @Field()
    @Property()
    createdAt: Date

    



  
    
    



}

export const CommentaryModels = getModelForClass(Commentary);
