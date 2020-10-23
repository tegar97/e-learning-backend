"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
// resolvers
const userResolver_1 = require("./resolvers/userResolver");
const server_1 = __importDefault(require("./config/server"));
const classResolver_1 = require("./resolvers/classResolver");
dotenv_1.default.config({ path: "../config.env" });
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [userResolver_1.UserResolver, classResolver_1.classResolver],
        emitSchemaFile: true,
        validate: false,
    });
    // create mongoose connectio
    server_1.default();
    const server = new apollo_server_express_1.ApolloServer({ schema, context: ({ req, res }) => ({ req, res }) });
    const app = express_1.default();
    server.applyMiddleware({ app });
    app.set('view engine', 'ejs');
    app.listen({ port: 5000 }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:5000${server.graphqlPath}`));
});
main().catch((error) => {
    console.log(error, 'error');
});
//# sourceMappingURL=server.js.map