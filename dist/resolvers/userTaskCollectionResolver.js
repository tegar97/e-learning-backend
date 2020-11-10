"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTaskCollectResolver = void 0;
const timeLine_1 = require("./../entities/timeLine");
const check_auth_1 = require("./../util/check-auth");
const typeDef_1 = require("./typeDef");
const UserTaskCollect_1 = require("./../entities/UserTaskCollect");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const User_1 = require("./../entities/User");
let UserTaskCollectResolver = class UserTaskCollectResolver {
    CreateUserCollect({ task_message_online, timeLineId, file }, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const TimeLine = yield timeLine_1.TimeLineModels.findById(timeLineId);
            const newUser = yield User_1.UserModel.findById(user.id);
            console.log(newUser);
            if (!TimeLine) {
                throw new apollo_server_express_1.UserInputError('Post Tidak Ditemukan');
            }
            const upload_at = new Date();
            const isLate = upload_at > TimeLine.due;
            try {
                const UserTaskCollection = yield UserTaskCollect_1.UserTaskCollectionModel.create({
                    task_message_online,
                    user_id: user.id,
                    file: file,
                    user_name: user.name,
                    user_photo: user.photo,
                    user_email: user.email,
                    upload_at,
                    isLate
                });
                TimeLine.user_collect.push(UserTaskCollection);
                yield TimeLine.save();
                return UserTaskCollection;
            }
            catch (error) {
                throw new apollo_server_express_1.UserInputError('Something wrong');
            }
        });
    }
    ;
    CheckFinishTask(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const Task = yield timeLine_1.TimeLineModels.findById(id);
            const userClass = Task.user_collect.filter(data => {
                return data.user_id === user.id;
            });
            if (userClass.length > 0) {
                return true;
            }
            return false;
        });
    }
    GiveScore(timeLineId, userCollectionId, point, feedBack, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const Task = yield timeLine_1.TimeLineModels.findById(timeLineId);
            console.log(user.id);
            console.log(user.id);
            const newTask = Task.user_collect.filter(data => {
                return data.id == userCollectionId;
            });
            console.log(newTask);
            newTask[0].point = point;
            Object.assign(newTask[0], { feedBack: feedBack });
            yield Task.save();
            console.log(newTask);
            return true;
        });
    }
    GetScore(timeLineId, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const Task = yield timeLine_1.TimeLineModels.findById(timeLineId);
            const newTask = Task.user_collect.filter(data => {
                return data.user_id == user.id;
            });
            return newTask[0];
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => UserTaskCollect_1.UserTaskCollection),
    __param(0, type_graphql_1.Arg("data")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.collectAssigment, Object]),
    __metadata("design:returntype", Promise)
], UserTaskCollectResolver.prototype, "CreateUserCollect", null);
__decorate([
    type_graphql_1.Query(() => Boolean),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserTaskCollectResolver.prototype, "CheckFinishTask", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("timeLineId")), __param(1, type_graphql_1.Arg("userCollectionId")), __param(2, type_graphql_1.Arg("point")), __param(3, type_graphql_1.Arg("feedBack")), __param(4, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Object]),
    __metadata("design:returntype", Promise)
], UserTaskCollectResolver.prototype, "GiveScore", null);
__decorate([
    type_graphql_1.Query(() => UserTaskCollect_1.UserTaskCollection),
    __param(0, type_graphql_1.Arg("timeLineId")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserTaskCollectResolver.prototype, "GetScore", null);
UserTaskCollectResolver = __decorate([
    type_graphql_1.Resolver()
], UserTaskCollectResolver);
exports.UserTaskCollectResolver = UserTaskCollectResolver;
//# sourceMappingURL=userTaskCollectionResolver.js.map