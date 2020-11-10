import { Upload } from './../util/upload-types';
import path from 'path'
import fs, { createReadStream } from 'fs'
import { Arg, Mutation, Resolver } from 'type-graphql'
import "reflect-metadata";
import {GraphQLUpload} from 'apollo-server-express'
function generateRandomString(length : string| number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

@Resolver()
export class UploadResolver  {

    @Mutation(() => Boolean)
    async uploadFile(@Arg("file",() => GraphQLUpload)  {
        createReadStream,
        filename
      }: Upload) : Promise<Boolean> {
          console.log(filename)
        // const {ext} = path.parse(filename)
        // const randomName = generateRandomString(12) + ext
        const stream = createReadStream()
        const pathName = path.join(__dirname, `../public/images/${filename}`)
        await stream.pipe(fs.createWriteStream(pathName))


        return true
    } 

}