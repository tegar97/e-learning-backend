import { MyContext } from './../util/types';
import { createClass, JoinClass, getDetailClass } from './typeDef';
import { User, UserModel, your_class } from './../entities/User';
import { Classes, ClassModels } from './../entities/Class';
import { Arg, Ctx, Mutation,Resolver,Query } from "type-graphql";
import {checkAuth} from "./../util/check-auth"
import { UserInputError } from 'apollo-server-express';

export interface userData {
    id : string | number
    email : string
    photo : string
    name : string
    iat : number
    exp: number
}
interface classNow {
    _id: string | number,
     id: string | number,
     name: string,
     lesson_days: number
}
@Resolver()
export class classResolver {
    @Query(() => Classes)
    async getDetailRoom(@Arg("id",() => String) id :  string,@Ctx(){req} : MyContext  ) : Promise<Classes>{
        const user : userData  = checkAuth(req)  
        const classRoom = await ClassModels.findById(id) 
        if(!classRoom){
            throw new UserInputError('Kelas Tidak Ditemukan ',{
                errors : {
                    id : 'Kelas Tidak Ditemukan'
                }
            })
        }

        const userId = []
         for(let i = 0 ; i < classRoom.user?.length;i ++){
            userId.push(classRoom.user[i].id.toString())


        }
       
        if(!userId.includes(user.id.toString())){
            throw new UserInputError('Ups Sepertinya Anda Mengakses Kelas Yang Salah ',{
                errors : {
                    id : 'Ups Sepertinya Anda Mengakses Kelas Yang Salah '
                }
            })  
        }
        return classRoom

    }
   
    @Query(() => [your_class])
    async getClassNow(@Ctx(){req} : MyContext  ) : Promise<[your_class]>{
        const user : userData  = checkAuth(req) 
        const UserDetail = await UserModel.findById(user.id)
        const today = new Date().getDay()
        const todayClass : any  = UserDetail.your_class.filter(data => data.lesson_days === today)
        console.log(todayClass)

        return todayClass

        
    }

    @Query(() => Boolean)
    async CheckAdmin(@Arg("id") id: string,@Ctx(){req} : MyContext  ) : Promise<Boolean>{
        const user = checkAuth(req)
        const classRoom = await ClassModels.findById(id)

        const userClass =  classRoom.user.filter(data =>{
            return data.id === user.id && data.isAdmin
        })
        if(userClass.length > 0) {
            return true
        }
        return false
       

        


        
    }
    @Query(() => String)
    // async getClassNow(@Ctx(){req} : MyContext ) : Promise<Classes>{
    //     const user : userData  = checkAuth(req)  
    //     const userDetail = await UserModel.findById(user.id)

    //     const d = new Date()
    //     userDetail.your_class.filter(data =>{
    //         return data.lesson_days === 
    //     })
    //     // userDetail.your_class.filter(lesson)
    //     // console.log(userDetail.your_class)
    //     // return 'hehehe'



        
    // }
    @Mutation(() => Classes)
    async createClass(@Arg("data"){name,subjects,lesson_day,description}: createClass,@Ctx(){req} : MyContext ) : Promise<Classes>{
        const user : userData  = checkAuth(req)  
        console.log(user)
        //TODO : VALIDATION NAME MUST NOT BE EMPTY
       if(!name) {
        throw new UserInputError('Nama Kelas Wajib Di isi  ',{
            errors : {
                email : 'Nama Kelas Wajib Di isi '
            }
        })
       }
      //TODO : CHECK  USER STILL LOGIN OR NOT
       if(!user){
            throw new UserInputError('Sesi Anda Telah Berakhir ',{
                errors : {
                    user : 'Sesi Anda Telah Berakhir,silahkan login Ulang '
                }
            })
       }
       let user2 : User  = await  UserModel.findById(user.id)
       const class_code = Math.random().toString(36).substring(7);

       const newClass = await ClassModels.create({
        name,
        code_class : class_code,
        description,
        subjects,
        lesson_day,
        createdAt: new Date().toISOString()

       })  

       newClass.user?.push({
        id: user2._id,
        email : user.email,
        photo : user.photo,
        name: user.name,
        isAdmin: true
    })
     await newClass.save()
        user2.your_class?.unshift({
           id: newClass.id,
           name : name,
           lesson_days : lesson_day
       })
       await user2.save()
       console.log(user)
       
 
       
        return newClass
    }
    
    @Mutation(() => Classes)
    async joinClass(@Arg("code_class",() => String) code_class :  string,@Ctx(){req} : MyContext) : Promise<Classes>{
        const user : userData  = checkAuth(req)  
        let user2 : User  = await  UserModel.findById(user.id)

        const classRoom = await ClassModels.findOne({code_class: code_class})
        
        if(!classRoom){
            throw new UserInputError('Kelas Tidak Diteumakan ',{
                errors : {
                    code_class : 'Kelas Tidak Ditemukan Atau Salah Kode Class'
                }
            })
        }
        for(let i = 0 ; i < classRoom.user?.length;i ++){

            if(classRoom.user[i].id === user.id){
                console.log(user.id)
                throw new UserInputError('Anda Telah Terdaftar Sebagai Anggota Kelas',{
                    errors : {
                        code_class : 'Anda Telah Terdaftar Sebagai Anggota Kelas'
                    }
                })
            }
        }

        classRoom.user?.unshift({
            id: user.id.toString(),
            email : user.email,
            photo : user.photo,
            name: user.name,
            isAdmin: false
        })
       await classRoom.save()
       
        
        user2.your_class?.push({
            id: classRoom.id,
            name : classRoom.name,
            lesson_days : classRoom.lesson_day
        })
        await user2.save()
        return classRoom
        
    }
}