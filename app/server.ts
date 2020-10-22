import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import dotenv from 'dotenv'
// resolvers
import {UserResolver} from "./resolvers/userResolver";
import connectDatabase from "./config/server";


dotenv.config({path: "../config.env"})

const main = async () => {

const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
    validate: false,
  });

// create mongoose connectio
connectDatabase()


const server = new ApolloServer({schema});
const app : any = Express();
server.applyMiddleware({app});
app.set('view engine','ejs');
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready and listening at ==> http://localhost:5000${server.graphqlPath}`))
};
main().catch((error)=>{
    console.log(error, 'error');
})