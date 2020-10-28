import {  UserTaskCollection } from './../entities/UserTaskCollect';
import { TimeLine } from './../entities/timeLine';
import { Classes} from "./../entities/Class";
import {Field, InputType  } from 'type-graphql'
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
    description?: string;

    @Field()
    subjects?: string;

    @Field()
    lesson_day?: number;
    
   

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
   
    @Field({nullable: true})
    content_title: string;

    @Field()
    content?: string;

    @Field({nullable: true})
    type_content!: string;

    @Field()
    class_id!: string;

    @Field({nullable: true})
    point?: number;

    @Field({nullable: true})
    due?: Date;



}

@InputType()
export class getDetailsData implements Partial<TimeLine>{
    @Field()
    id: string;

}
@InputType()
export class EditTimeLine implements Partial<TimeLine>{
   
    @Field()
    id!: string;

    @Field()
    content?: string;

}

@InputType()
export class collectAssigment implements Partial<UserTaskCollection>{


    @Field()
    task_message_online?: string;

   
    @Field()
    timeLineId?: string;

    

}
