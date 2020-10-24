import { MyContext } from './../util/types';
import { createClass, JoinClass, getDetailClass } from './typeDef';
import { User, UserModel } from './../entities/User';
import { Classes, ClassModels } from './../entities/Class';
import { Arg, Ctx, Mutation,Resolver,Query } from "type-graphql";
import crypto from 'crypto'
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
@Resolver()
export class classResolver {
    @Query(() => Classes)
    async getDetailRoom(@Arg("data"){id} :getDetailClass,@Ctx(){req} : MyContext  ) : Promise<Classes>{
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
                    code_class : 'Ups Sepertinya Anda Mengakses Kelas Yang Salah '
                }
            })  
        }
        return classRoom

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
    async createClass(@Arg("data"){name,subjects,lesson_day}: createClass,@Ctx(){req} : MyContext ) : Promise<Classes>{
        const user : userData  = checkAuth(req)  
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
       console.log(user2)
       const class_code = Math.random().toString(36).substring(7);

       const newClass = await ClassModels.create({
        name,
        code_class : class_code,
        subjects,
        lesson_day,
        createdAt: new Date().toISOString()

       })  
        user2.your_class?.unshift({
           id: newClass.id,
           name : name,
           lesson_days : lesson_day
       })
       await user2.save()
       console.log(user)
       
        newClass.user?.push({
            id: user2._id,
            email : user.email,
            photo : user.photo,
            name: user.name,
            isAdmin: true
        })
       await newClass.save()
       
        return newClass
    }
    
    @Mutation(() => Classes)
    async JoinClass(@Arg("data"){code_class} : JoinClass ,@Ctx(){req} : MyContext) : Promise<Classes>{
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