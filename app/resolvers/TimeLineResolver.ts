import { TimeLineModels } from './../entities/timeLine';
import { TimeLine, TimeLineModels } from '../entities/timeLine';
import { createTimeLine, getDetailClass, getDetailsData, EditTimeLine } from './typeDef';
import { MyContext } from '../util/types';
import { Classes, ClassModels } from '../entities/Class';
import { Arg, Ctx, Mutation,Resolver,Query } from "type-graphql";
import {checkAuth} from "../util/check-auth"
import { AuthenticationError, UserInputError } from 'apollo-server-express';
import { validateTimeLinePost } from './../util/validators';

export interface userData {
    id : string | number
    email : string
    photo : string
    name : string
    iat : number
    exp: number
}
@Resolver()
export class TimeLineResolver {
  
    @Query(() => TimeLine)
    async getTimeLine(@Arg("id",() => String) id: string ,@Ctx(){req} : MyContext  ) : Promise<TimeLine>{
        checkAuth(req)  

        const TimeLine = await TimeLineModels.findById(id).populate({path: "created_by",select:"name", model: "User"})
        return TimeLine
    }
    
    @Query(() => [TimeLine])
    async getTimeLines(@Arg("class_id",() => String) class_id: string ,@Ctx(){req} : MyContext ) : Promise<TimeLine>{
        checkAuth(req)  

        const TimeLine :any = await TimeLineModels.find({class_id}).sort({createdAt: -1}).populate({path: "created_by",model: "User"})
        return TimeLine
    }
    @Mutation(() => TimeLine)
    async CreatePost(@Arg("data"){content,type_content,class_id,content_title,point,due,file}: createTimeLine,@Ctx(){req} : MyContext ) : Promise<TimeLine>{
        const user : userData  = checkAuth(req)  
        const {valid,errors} = validateTimeLinePost(content)
        console.log(content_title)
        if(!valid){
            throw new UserInputError('Errors',{errors})
        }   

        
        //TODO : check type time line 
        if(type_content == 'announcement'){
            console.log('1')
 
            const TimeLine =  await TimeLineModels.create({
                content ,
                content_title,
                created_by: user.id,
                type_content,
                class_id,
                createdAt: new Date().toISOString()
            })

            return TimeLine  
        }else {
            console.log('2')
            const TimeLine =  await TimeLineModels.create({
                content,
                content_title,
                created_by: user.id,
                type_content,
                class_id,
                point,
                due,
                file,
                isActive: true,
                createdAt: new Date().toISOString()
            })

            return TimeLine  
        }
       
    }
    @Mutation(() => Boolean)
    async DeletPost(@Arg("id")id : string,@Ctx(){req} : MyContext ) : Promise<Boolean>{
        checkAuth(req)  
        await TimeLineModels.findByIdAndDelete(id)
        return true
        
    }
    @Mutation(() => Boolean)
    async EditPost(@Arg("data"){id,content,content_title,point,due,isActive}: EditTimeLine,@Ctx(){req} : MyContext ) : Promise<Boolean>{
        const user = checkAuth(req)  
        const TimeLine = await TimeLineModels.findById(id).populate({path: "created_by",model: "User"})
        console.log(TimeLine)
        if(!TimeLine) {
            throw new UserInputError('Invalid Id',{
                id : 'Post Not Found  '
            })
        }
        if(!TimeLine){
            throw new UserInputError('Post Not Found')

        }
        //Cek If User === TimeLine.user , if not same dont't allow action
        if(TimeLine.created_by._id.toString() === user.id.toString()){
            if(TimeLine.type_content === 'announcement'){

                await TimeLine.update({ content ,content_title},{  new: true,runValidators: true})
            }else{
                await TimeLine.update({ content ,content_title,isActive,point,due},{  new: true,runValidators: true})

            }
            await TimeLine.save()
            return true
        }else{
            throw new AuthenticationError('Action Not Allowed')
        }
        


    }

    @Mutation(() => Boolean)
    async DeletePost(@Arg("id" ,() =>String ) id : String,@Ctx(){req} : MyContext ) : Promise<Boolean>{
        const user = checkAuth(req)  
        const TimeLine = await TimeLineModels.findById(id)
        if(!TimeLine){
            throw new UserInputError('Post Not Found')

        }
         //Cek If User === TimeLine.user , if not same dont't allow action

        if(TimeLine.created_by.toString() === user.id.toString()){
            await TimeLine.deleteOne()
            return true

        }else{
            throw new AuthenticationError('Action Not Allowed')
        }
    

    }
            

    
       
    
    
   
}