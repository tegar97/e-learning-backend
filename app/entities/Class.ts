import {  UserModel } from './User';
import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass,Ref } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class Class {
    @Field(()=> ID)
    id: string;

    @Field() 
    @Property()
    name: string;

    @Property()
    token: string;

    @Field()
    @Property()
    subjects?: string;

    @Field()
    @Property()
    lesson_day: string;

    @Field()
    @Property({default: 'default.png'})
    photo? : Date

    @Field()
    @Property({ref: UserModel})
    admin? : Ref<typeof UserModel>

    @Field()
    @Property()
    passwordResetExpire? : Date

    @Field()
    @Property({required: true,default: new Date().toISOString()})
    createdAt?: string;


    



}
export const ClassModels = getModelForClass(Class);
