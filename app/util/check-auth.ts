import {AuthenticationError} from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import {Request} from 'express'
import {userData} from './../resolvers/classResolver'
export const checkAuth = (context : Request ) : userData => {
    //context = {..headers}
    const authHeader = context.headers.authorization;
    console.log(authHeader)

    if(authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token) {
            try {
                const user : any  = jwt.verify(token , 'saya-adalah-seorang-pelajar-dan-anaks') 
                return user
            } catch (error) {
                throw new AuthenticationError('Invalid/Expired Token')
            }
        }
        throw new Error('Authentication token must be bearer token')
    }
    throw new Error('Authentication header must be provided')

}
