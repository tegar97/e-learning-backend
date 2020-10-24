import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "User Data Model" })
export class UserData {

    @Field(() => ID) 
    @Property()
    id?: string;
  
    @Field() 
    @Property()
    name?: string;

    @Field() 
    @Property()
    email?: string;

    @Field() 
    @Property()
    photo?: string;

    @Field() 
    @Property()
    isAdmin?: boolean;

    @Field() 
    @Property({default: new Date().toISOString()})
    createdAt?: string;
  }
@ObjectType({ description: "The User model" })
export class Classes {
    @Field(()=> ID)
    id: string;

    @Field() 
    @Property()
    name: string;

    @Field() 
    @Property()
    code_class?: string;

  
    @Field(type => [UserData], { nullable: false })
    @Property({type : () => [UserData]})
    user?: UserData[]

    @Field()
    @Property()
    subjects?: string;

    @Field()
    @Property()
    lesson_day?: number;

    @Field()
    @Property({default: 'default.png'})
    photo? : string



    @Field()
    @Property({required: true})
    createdAt?: string;

    
    



}

export const ClassModels = getModelForClass(Classes);
