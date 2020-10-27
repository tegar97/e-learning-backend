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
exports.TimeLineResolver = void 0;
const timeLine_1 = require("../entities/timeLine");
const typeDef_1 = require("./typeDef");
const type_graphql_1 = require("type-graphql");
const check_auth_1 = require("../util/check-auth");
const apollo_server_express_1 = require("apollo-server-express");
const validators_1 = require("./../util/validators");
let TimeLineResolver = class TimeLineResolver {
    getTimeLine(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            check_auth_1.checkAuth(req);
            const TimeLine = yield timeLine_1.TimeLineModels.findById(id).populate({ path: "created_by", select: "name", model: "User" });
            return TimeLine;
        });
    }
    getTimeLines(class_id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            check_auth_1.checkAuth(req);
            const TimeLine = yield timeLine_1.TimeLineModels.find({ class_id }).sort({ createdAt: -1 }).populate({ path: "created_by", model: "User" }).populate({ path: "user_collect", Model: "UserTaskCollection", populate: {
                    path: "user_id",
                    model: "User"
                } });
            return TimeLine;
        });
    }
    CreatePost({ content, type_content, class_id, content_title, point, due }, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const { valid, errors } = validators_1.validateTimeLinePost(content);
            console.log(content);
            if (!valid) {
                throw new apollo_server_express_1.UserInputError('Errors', { errors });
            }
            //TODO : check type time line 
            console.log(type_content === 'announcement');
            if (type_content === 'announcement') {
                const TimeLine = yield timeLine_1.TimeLineModels.create({
                    content,
                    created_by: user.id,
                    type_content,
                    class_id,
                    createdAt: new Date().toISOString()
                });
                return TimeLine;
            }
            else {
                console.log('2');
                const TimeLine = yield timeLine_1.TimeLineModels.create({
                    content,
                    content_title,
                    created_by: user.id,
                    type_content,
                    class_id,
                    point,
                    due,
                    createdAt: new Date().toISOString()
                });
                return TimeLine;
            }
        });
    }
    EditPost({ id, content }, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const TimeLine = yield timeLine_1.TimeLineModels.findById(id);
            if (!TimeLine) {
                throw new apollo_server_express_1.UserInputError('Invalid Id', {
                    id: 'Post Not Found  '
                });
            }
            if (!TimeLine) {
                throw new apollo_server_express_1.UserInputError('Post Not Found');
            }
            //Cek If User === TimeLine.user , if not same dont't allow action
            if (TimeLine.created_by.toString() === user.id.toString()) {
                yield TimeLine.update({ content }, { new: true, runValidators: true });
                yield TimeLine.save();
                return true;
            }
            else {
                throw new apollo_server_express_1.AuthenticationError('Action Not Allowed');
            }
        });
    }
    DeletePost(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const TimeLine = yield timeLine_1.TimeLineModels.findById(id);
            if (!TimeLine) {
                throw new apollo_server_express_1.UserInputError('Post Not Found');
            }
            //Cek If User === TimeLine.user , if not same dont't allow action
            if (TimeLine.created_by.toString() === user.id.toString()) {
                yield TimeLine.deleteOne();
                return true;
            }
            else {
                throw new apollo_server_express_1.AuthenticationError('Action Not Allowed');
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => timeLine_1.TimeLine),
    __param(0, type_graphql_1.Arg("id", () => String)), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TimeLineResolver.prototype, "getTimeLine", null);
__decorate([
    type_graphql_1.Query(() => [timeLine_1.TimeLine]),
    __param(0, type_graphql_1.Arg("class_id", () => String)), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TimeLineResolver.prototype, "getTimeLines", null);
__decorate([
    type_graphql_1.Mutation(() => timeLine_1.TimeLine),
    __param(0, type_graphql_1.Arg("data")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.createTimeLine, Object]),
    __metadata("design:returntype", Promise)
], TimeLineResolver.prototype, "CreatePost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("data")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.EditTimeLine, Object]),
    __metadata("design:returntype", Promise)
], TimeLineResolver.prototype, "EditPost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id", () => String)), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TimeLineResolver.prototype, "DeletePost", null);
TimeLineResolver = __decorate([
    type_graphql_1.Resolver()
], TimeLineResolver);
exports.TimeLineResolver = TimeLineResolver;
//# sourceMappingURL=TimeLineResolver.js.map