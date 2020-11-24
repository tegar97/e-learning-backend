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
const uploadResolver_1 = require("./resolvers/uploadResolver");
const CommentaryResolver_1 = require("./resolvers/CommentaryResolver");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
// resolvers
const userResolver_1 = require("./resolvers/userResolver");
const server_1 = __importDefault(require("./config/server"));
const classResolver_1 = require("./resolvers/classResolver");
const TimeLineResolver_1 = require("./resolvers/TimeLineResolver");
const cors_1 = __importDefault(require("cors"));
const userTaskCollectionResolver_1 = require("./resolvers/userTaskCollectionResolver");
const pubsub = new apollo_server_express_1.PubSub();
dotenv_1.default.config({ path: "../config.env" });
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            userResolver_1.UserResolver,
            classResolver_1.classResolver,
            TimeLineResolver_1.TimeLineResolver,
            userTaskCollectionResolver_1.UserTaskCollectResolver,
            CommentaryResolver_1.CommentsResolver,
            uploadResolver_1.UploadResolver
        ],
        emitSchemaFile: true,
        validate: false,
    });
    // create mongoose connectio
    server_1.default();
    const server = new apollo_server_express_1.ApolloServer({ schema, context: ({ req, res }) => ({ req, res, pubsub }) });
    const app = express_1.default();
    server.applyMiddleware({ app });
    app.set('view engine', 'ejs');
    app.use(express_1.default.static(__dirname + '/public'));
    app.use(cors_1.default());
    app.listen({ port: process.env.PORT || 80 }, () => console.log(`🚀 Server ready and listening at ==> http://localhost${server.graphqlPath}`));
});
main().catch((error) => {
    console.log(error, 'error');
});
//# sourceMappingURL=server.js.map