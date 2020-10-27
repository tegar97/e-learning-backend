import { TimeLineModels } from './../entities/timeLine';
import { checkAuth } from './../util/check-auth';
import { MyContext } from './../util/types';
import { collectAssigment } from './typeDef';
import { UserTaskCollection, UserTaskCollectionModel } from './../entities/UserTaskCollect';
import {Resolver,Mutation,Arg,Ctx} from 'type-graphql'
import { UserInputError } from 'apollo-server-express';
import {UserModel} from './../entities/User'


@Resolver()
export class UserTaskCollectResolver {
    @Mutation(() => UserTaskCollection)
    async CreateUserCollect(@Arg("data"){task_message_online,timeLineId}: collectAssigment,@Ctx(){req} : MyContext ) : Promise<Classes>{
        const user = checkAuth(req)
        const TimeLine = await TimeLineModels.findById(timeLineId)
     const newUser = await UserModel.findById(user.id)
     console.log(newUser)
      if(!TimeLine){
          throw new UserInputError('Post Tidak Ditemukan')
      }
      const upload_at = new Date()
      const isLate = upload_at > TimeLine.due
      try {
        

          console.log(user.id)
            const UserTaskCollection= await UserTaskCollectionModel.create({
            task_message_online,
            user_name : user.name,
            user_email: user.email,
            upload_at,
            isLate
          })
        
    
          TimeLine.user_collect.push(UserTaskCollection)
          await TimeLine.save()
          return UserTaskCollection

    
      } catch (error) {
          throw new UserInputError('Something wrong')
      }
    

    };

  
}