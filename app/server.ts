import { UploadResolver } from './resolvers/uploadResolver';
import { CommentsResolver } from './resolvers/CommentaryResolver';
import { ApolloServer,PubSub } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import dotenv from 'dotenv'
// resolvers
import {UserResolver} from "./resolvers/userResolver";
import connectDatabase from "./config/server";
import { classResolver } from "./resolvers/classResolver";
import { TimeLineResolver } from "./resolvers/TimeLineResolver";
import cors from 'cors'
import path from 'path'
import { UserTaskCollectResolver } from "./resolvers/userTaskCollectionResolver";
const pubsub = new PubSub();


dotenv.config({path: "../config.env"})

const main = async () => {

const schema = await buildSchema({
    resolvers: [
      UserResolver,
      classResolver,
      TimeLineResolver
      ,UserTaskCollectResolver,
      CommentsResolver,
      UploadResolver
    ],
  
    
    emitSchemaFile: true,
    validate: false,
   
    
  });

// create mongoose connectio
connectDatabase()

const server = new ApolloServer({schema,context: ({req,res})  => ({req,res,pubsub})});
const app : any = express();

server.applyMiddleware({app});
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'))

app.use(cors())

app.listen({ port:  process.env.PORT || 80  }, () =>
  console.log(`🚀 Server ready and listening at ==> http://localhost${server.graphqlPath}`))
};



main().catch((error)=>{
    console.log(error, 'error');
})