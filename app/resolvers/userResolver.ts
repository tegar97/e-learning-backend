import { Email } from './../util/email';
import { validateRegister, validateLogin } from './../util/validators';
import {Resolver,Mutation,Arg,Query} from 'type-graphql'
import {RegisterInput,LoginInput,ForgotPassword} from './typeDef'
import {User,UserModel} from './../entities/User'
import { AuthenticationError, UserInputError } from 'apollo-server-express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



function genereteToken(user: {id : string , email : string}) :string{
    return jwt.sign({
        id :  user.id,
        email : user.email
    },'saya-adalah-seorang-pelajar-dan-anaks',{expiresIn: '1D'});
} 



@Resolver()
export class UserResolver {
    @Query(() => [User])
    async returnAllProduct(){
      return await UserModel.find();
    };

    @Mutation(() => User)
    async register(@Arg("data"){name,email,password,confirmPassword}: RegisterInput): Promise<User> { 
        const {valid,errors} = validateRegister(email,password,confirmPassword)
        if(!valid){
            throw new UserInputError('Errors',{errors})
        }   

        const userCheck = await UserModel.findOne({email})
        if(userCheck){
            throw new UserInputError('Email Sudah Ada Yang Pakai',{
                errors : {
                    username : 'Email Sudah Ada Yang Pakai'
                }
            })
        }

        password = await bcrypt.hash(password,12)
        const newUser :any  = await  UserModel.create({
            name,
            email,
            password,
            confirmPassword
        }) 
       
        const token = genereteToken(newUser)
       return {
            ...newUser._doc,
           token
       }
  
  
    }

    @Mutation(() => User)
    async login(@Arg("data"){email,password} : LoginInput) : Promise<User> {
        
        const user : any = await UserModel.findOne({email})
        const {valid ,errors} = validateLogin(email,password)
        if(!valid){
            throw new UserInputError('Errors',{errors})
        }
        if(!user){
            errors.include = 'User Not Found';
            throw new UserInputError('Wrong Crenditials',{errors})
        }
        const match = await bcrypt.compare(password , user.password)
        if(!match) {
            errors.include = 'Wrong Password , Check Again';
            throw new UserInputError('Wrong Password ',{errors})
        }
        const token = genereteToken(user)
        return { 
            ...user._doc,
            token
        }    
    } 
    @Mutation(() => String)
    async forgotPassword(@Arg('data'){email} : ForgotPassword): Promise<String> {
        //Find User When email  === email Iinput 
        const  user = await UserModel.findOne({email})
        if(!user){
            throw new UserInputError('Email Tidak Terdaftar',{
                errors : {
                    email : 'Email Tidak Terdaftar'
                }
            })
        }
      //2.Generate the random reset token
      const resetToken = user.createPasswordResetToken()
      console.log(resetToken)
      await user.save()
    

    //3.Send Email

      try {
          const resetUrl = `http://localhost:3000/reset-password/${resetToken}`
          await new Email(user,resetUrl).sendPasswordReset();
          return 'Check Email'

        } catch (error) {
            user.passwordResetExpire = undefined
            user.passwordResetToken = undefined

            await user.save({
                validateBeforeSave: false
            })

            throw new AuthenticationError('Gagal Kirim Email')


        }

        


    }

    
    

}