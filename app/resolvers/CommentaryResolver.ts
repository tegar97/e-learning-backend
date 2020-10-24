import { Commentary } from './../entities/Commentary';
import { MyContext } from '../util/types';
import { Arg, Ctx, Mutation,Resolver,Query } from "type-graphql";
import { UserInputError } from 'apollo-server-express';



@Resolver()
export class TimeLineResolver {
    @Mutation(() => Commentary)
    async CreatePost(@Arg("content",() => String) content: string,@Ctx(){req} : MyContext ) : Promise<Commentary>{
        if(content.trim() === ''){
            throw new UserInputError('Komentar Wajib Di isi',
            {
                contet: "Komentar Wajib Di isi"
            })
        }
        
       
    }
   
    
    
   
}