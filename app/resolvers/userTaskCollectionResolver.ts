import { TimeLineModels } from './../entities/timeLine';
import { checkAuth } from './../util/check-auth';
import { MyContext } from './../util/types';
import { collectAssigment } from './typeDef';
import { UserTaskCollection, UserTaskCollectionModel } from './../entities/UserTaskCollect';
import {Resolver,Mutation,Arg,Ctx,Query} from 'type-graphql'
import { UserInputError } from 'apollo-server-express';
import {UserModel} from './../entities/User'


@Resolver()
export class UserTaskCollectResolver {
    @Mutation(() => UserTaskCollection)
    async CreateUserCollect(@Arg("data"){task_message_online,timeLineId,file}: collectAssigment,@Ctx(){req} : MyContext ) : Promise<Classes>{
        const user = checkAuth(req)
        const TimeLine = await TimeLineModels.findById(timeLineId)
     const newUser  = await UserModel.findById(user.id)
     
     console.log(newUser)
      if(!TimeLine){
          throw new UserInputError('Post Tidak Ditemukan')
      }
      const upload_at = new Date()
      const isLate = upload_at > TimeLine.due
      try {
        

            const UserTaskCollection : any= await UserTaskCollectionModel.create({
            task_message_online,
            user_id : user.id,
            file: file,
            user_name : user.name,
            user_photo : user.photo,
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

    
    @Query(() => Boolean)
    async CheckFinishTask(@Arg("id") id: string,@Ctx(){req} : MyContext  ) : Promise<Boolean>{
        const user = checkAuth(req)
        const Task = await TimeLineModels.findById(id)

        const userClass =  Task.user_collect.filter(data =>{
            return data.user_id === user.id 
        })
        if(userClass.length > 0) {
            return true
        }
        return false
        
    }

     
    @Mutation(() => Boolean)
    async GiveScore(@Arg("timeLineId") timeLineId: string,@Arg("userCollectionId") userCollectionId: string,@Arg("point") point: number,@Arg("feedBack") feedBack: string,@Ctx(){req} : MyContext  ) : Promise<Boolean>{
        const user = checkAuth(req)
        const Task = await TimeLineModels.findById(timeLineId)
        console.log(user.id)
        console.log(user.id)
        const newTask : any =  Task.user_collect.filter(data =>{
            return data.id == userCollectionId
        })
        console.log(newTask)
        newTask[0].point = point
        Object.assign(newTask[0], {feedBack : feedBack});
        await Task.save()
        console.log(newTask)
        return true
    }

    @Query(() => UserTaskCollection)
    async GetScore(@Arg("timeLineId") timeLineId: string,@Ctx(){req} : MyContext  ) : Promise<UserTaskCollection>{
        const user = checkAuth(req)
        const Task = await TimeLineModels.findById(timeLineId)

        const newTask : any =  Task.user_collect.filter(data =>{
            return data.user_id == user.id 
        })

        

        return newTask[0]
    }
}