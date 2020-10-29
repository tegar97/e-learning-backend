import { Comments, TimeLine, TimeLineModels } from './../entities/timeLine';
import { checkAuth } from './../util/check-auth';
import { MyContext } from '../util/types';
import { Arg, Ctx, Mutation,Resolver,Query,ID, Root, Int, Subscription } from "type-graphql";
import { UserInputError } from 'apollo-server-express';



@Resolver()
export class CommentsResolver {
    @Subscription(() => String, {
        topics: "COMMENTS"
    })
    async subscription(@Ctx(){req} : MyContext): Promise<any> {
        return "something";
    }
    @Mutation(() => TimeLine)
    async CreateComment(@Arg("content",() => String) content: string,@Arg("id",() => String) id: string,@Ctx(){req,pubsub} : MyContext ) : Promise<TimeLine>{
        const user= checkAuth(req)
        const timeLine = await TimeLineModels.findById(id)

        
        if(content.trim() === ''){
            throw new UserInputError('Komentar Wajib Di isi',
            {
                content: "Komentar Wajib Di isi"
            })
        }
        if(timeLine){
            timeLine.comments.unshift({
                user_id : user.id,
                content: content,
                createdAt: new Date()
            })

            console.log(content)

            await timeLine.save()

            await pubsub.publish('COMMENTS');

            return timeLine
        }else{
            throw new UserInputError("Post TIdak Ditemukan")
        } 
    
    }

    @Mutation(() => Boolean)
    async editComment(@Arg("content",() => String) content: string,@Arg("id",() => String) id: string,@Ctx(){req} : MyContext ) : Promise<Boolean>{
        
        const comments = await TimeLineModels.findById(id)

        if(!comments){
            throw new UserInputError("Post TIdak Ditemukan")

        }

        comments.update({
            content
        },{
            new: true,runValidators: true
        })
        return true
    }

   
}