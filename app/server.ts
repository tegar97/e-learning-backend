import { CommentsResolver } from './resolvers/CommentaryResolver';
import { TimeLine } from './entities/timeLine';
import { ApolloServer,PubSub } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import dotenv from 'dotenv'
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
// resolvers
import {UserResolver} from "./resolvers/userResolver";
import connectDatabase from "./config/server";
import { classResolver } from "./resolvers/classResolver";
import { TimeLineResolver } from "./resolvers/TimeLineResolver";
import { UserTaskCollectResolver } from "./resolvers/userTaskCollectionResolver";
import { createServer } from 'http';
const pubsub = new PubSub();


dotenv.config({path: "../config.env"})

const main = async () => {

const schema = await buildSchema({
    resolvers: [
      UserResolver,
      classResolver,
      TimeLineResolver
      ,UserTaskCollectResolver,
      CommentsResolver
    ],
  
    
    emitSchemaFile: true,
    validate: false,
   
    
  });

// create mongoose connectio
connectDatabase()


const server = new ApolloServer({schema,context: ({req,res})  => ({req,res,pubsub})});
const app : any = Express();
server.applyMiddleware({app});
app.set('view engine','ejs');
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready and listening at ==> http://localhost:5000${server.graphqlPath}`))
};



main().catch((error)=>{
    console.log(error, 'error');
})