import { TimeLineModels } from './../entities/timeLine';
import { checkAuth } from './../util/check-auth';
import { MyContext } from './../util/types';
import { collectAssigment } from './typeDef';
import { UserTaskCollection, UserTaskCollectionModel } from './../entities/UserTaskCollect';
import {Resolver,Mutation,Arg,Query,Ctx} from 'type-graphql'
import {User,UserModel} from './../entities/User'
import { UserInputError } from 'apollo-server-express';



@Resolver()
export class UserTaskCollectResolver {
    @Mutation(() => UserTaskCollection)
    async CreateUserCollect(@Arg("data"){task_message_online,timeLineId}: collectAssigment,@Ctx(){req} : MyContext ) : Promise<Classes>{
     const user = checkAuth(req)
      const TimeLine = await TimeLineModels.findById(timeLineId)
      if(!TimeLine){
          throw new UserInputError('Post Tidak Ditemukan')
      }
      const upload_at = new Date()
      const isLate = upload_at > TimeLine.due
      try {
        const UserTaskCollection= await UserTaskCollectionModel.create({
            user_id : user.id,
            task_message_online,
            upload_at,
            isLate
          })
    
          TimeLine.user_collect.push(UserTaskCollection)
          await TimeLine.save()
    
      } catch (error) {
          throw new UserInputError('Something wrong')
      }
    
      return UserTaskCollection

    };

  
}