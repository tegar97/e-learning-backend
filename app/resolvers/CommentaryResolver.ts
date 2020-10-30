import { Comments, TimeLine, TimeLineModels } from './../entities/timeLine';
import { checkAuth } from './../util/check-auth';
import { MyContext } from '../util/types';
import { Arg, Ctx, FieldResolver, Int, Mutation,Resolver, Root } from "type-graphql";
import { UserInputError } from 'apollo-server-express';



@Resolver(TimeLine)
export class CommentsResolver {
    @FieldResolver(type => Int)
    async commentsCount(@Root() parent: TimeLine) : Promise<number>{
        return await parent._doc.comments.length;
    }
   
    @Mutation(() => TimeLine)
    async CreateComment(@Arg("content",() => String) content: string,@Arg("id",() => String) id: string,@Ctx(){req} : MyContext ) : Promise<TimeLine>{
        const user= checkAuth(req)
        const timeLine : any= await TimeLineModels.findById(id)

        
        if(content.trim() === ''){
            throw new UserInputError('Komentar Wajib Di isi',
            {
                content: "Komentar Wajib Di isi"
            })
        }
        if(timeLine){
            timeLine.comments.push({
                user_id: user.id,
                user_name: user.name,
                user_photo: user.photo,
                content: content,
                createdAt: new Date()
            })
           
           

            await timeLine.save()


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