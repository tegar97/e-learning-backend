import { TimeLine, TimeLineModels } from './../entities/timeLine';
import { createTimeLine } from './typeDef';
import { MyContext } from './../util/types';
import { Classes, ClassModels } from './../entities/Class';
import { Arg, Ctx, Mutation,Resolver,Query } from "type-graphql";
import {checkAuth} from "./../util/check-auth"
import { UserInputError } from 'apollo-server-express';
import { validateTimeLinePost } from 'app/util/validators';

export interface userData {
    id : string | number
    email : string
    photo : string
    name : string
    iat : number
    exp: number
}
@Resolver()
export class classResolver {
    @Mutation(() => Classes)
    async createClass(@Arg("data"){content_title,content,type_content,point,due,file}: createTimeLine,@Ctx(){req} : MyContext ) : Promise<TimeLine>{
        const user : userData  = checkAuth(req)  
        validateTimeLinePost
        const {valid,errors} = validateTimeLinePost(content)

        //TODO : check type time line 
        if(type_content === 'announcement'){
            if(!valid){
                throw new UserInputError('Errors',{errors})
            }   

            const TimeLine = TimeLineModels.create({
                content,
                created_by
            })
            

        }
       
    }
    
   
}