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
exports.CommentsResolver = void 0;
const timeLine_1 = require("./../entities/timeLine");
const check_auth_1 = require("./../util/check-auth");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
let CommentsResolver = class CommentsResolver {
    CreateComment(content, id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const timeLine = yield timeLine_1.TimeLineModels.findById(id);
            if (content.trim() === '') {
                throw new apollo_server_express_1.UserInputError('Komentar Wajib Di isi', {
                    contet: "Komentar Wajib Di isi"
                });
            }
            if (timeLine) {
                timeLine.comments.unshift({
                    user_id: user.id,
                    content: 'content',
                    createdAt: new Date()
                });
                yield timeLine.save();
                return timeLine;
            }
            else {
                throw new apollo_server_express_1.UserInputError("Post TIdak Ditemukan");
            }
        });
    }
    editComment(content, id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield timeLine_1.TimeLineModels.findById(id);
            if (!comments) {
                throw new apollo_server_express_1.UserInputError("Post TIdak Ditemukan");
            }
            comments.update({
                content
            }, {
                new: true, runValidators: true
            });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => timeLine_1.TimeLine),
    __param(0, type_graphql_1.Arg("content", () => String)), __param(1, type_graphql_1.Arg("id", () => String)), __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CommentsResolver.prototype, "CreateComment", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("content", () => String)), __param(1, type_graphql_1.Arg("id", () => String)), __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CommentsResolver.prototype, "editComment", null);
CommentsResolver = __decorate([
    type_graphql_1.Resolver()
], CommentsResolver);
exports.CommentsResolver = CommentsResolver;
//# sourceMappingURL=CommentaryResolver.js.map