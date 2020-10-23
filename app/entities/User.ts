import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass, Ref } from "@typegoose/typegoose";
import crypto from 'crypto'

@ObjectType({ description: "The Class Info" })
export class your_class {
    @Field(() => ID) 
    @Property()
    id: string;

    @Field() 
    @Property()
    name: string;
    
    @Field() 
    @Property()
    @Field() 
    lesson_days?: string;



}

@ObjectType({ description: "The User model" })
export class User {
    @Field(()=> ID)
    id: string;
    
    @Field() 
    @Property()
    name: string;

    @Field()
    @Property()
    token?: string;

    @Field()
    @Property({required: true})
    email!: string;

    @Field()
    @Property({required: true})
    password!: string;

    @Field()
    @Property()
    confirmPassword?: string;


    @Field()
    @Property({required: true,default: new Date().toISOString()})
    createdAt?: string;

    @Field(type => [your_class], { nullable: true })
    @Property({type : () => [your_class]})
    your_class?: your_class[]

    @Field()
    @Property()
    passwordChangeAt? : Date

    @Field()
    @Property()
    passwordResetToken? : String

    @Field()
    @Property()
    passwordResetExpire? : String
    save: any;
    _id: string;

    

    //for make reset Password token
    public  createPasswordResetToken() : string {
        const resetToken = crypto.randomBytes(32).toString('hex')

        this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')
        const newDate = Date.now() + 10 * 60 * 1000;
        this.passwordResetExpire = new Date(newDate).toISOString()

        return resetToken

    }
    
}
export const UserModel = getModelForClass(User);
