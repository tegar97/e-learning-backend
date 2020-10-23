import { TimeLine } from './../entities/timeLine';
import { ClassModels,Classes,UserData} from "./../entities/Class";
import {Field, InputType,ID  } from 'type-graphql'
import {User} from './../entities/User'


//===================================== Type Auth ====================================
@InputType()
export class RegisterInput implements Partial<User>{
   
    @Field()
    name: string;

    @Field()
    email : string;

    @Field()
    password: string;

    @Field()
    confirmPassword: string;


}



@InputType()
export class LoginInput implements Partial<User>{
   

    @Field()
    email : string;

    @Field()
    password: string;


}


@InputType()
export class ForgotPassword implements Partial<User>{
    @Field()
    email! : string;
}

@InputType()
export class ResetPassword implements Partial<User>{
    @Field()
    password! : string;

    @Field()
    passwordConfirm! : string;

    @Field()
    tokenParams! : string;
}

//===================================== END Type Auth ====================================


//=====================================  Type Class ======================================
@InputType()
export class createClass implements Partial<Classes>{
   
    @Field()
    name?: string;

    @Field()
    subjects?: string;

    @Field()
    lesson_day?: string;
    
   

}
@InputType()
export class JoinClass implements Partial<Classes>{
   
    @Field()
    code_class!: string;

}

@InputType()
export class getDetailClass implements Partial<Classes>{
   
    @Field()
    id!: string;

}



//===================================== END Type Class ===================================


@InputType()
export class createTimeLine implements Partial<TimeLine>{
   
    @Field()
    id!: string;

    @Field()
    content_title?: string;

    @Field()
    file?: string;

    @Field()
    content!: string;

    @Field()
    type_content!: string;

    @Field()
    point?: number;

    @Field()
    due?: string;

    @Field()
    created_by?: string;


}