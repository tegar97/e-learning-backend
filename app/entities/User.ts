import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import crypto from 'crypto'
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

    @Field()
    @Property()
    passwordChangeAt? : Date

    @Field()
    @Property()
    passwordResetToken? : String

    @Field()
    @Property()
    passwordResetExpire? : String

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
