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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLineModels = exports.TimeLine = exports.Comments = exports.fileDoc = void 0;
const UserTaskCollect_1 = require("./UserTaskCollect");
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
let fileDoc = class fileDoc {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], fileDoc.prototype, "file_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], fileDoc.prototype, "file_type", void 0);
fileDoc = __decorate([
    type_graphql_1.ObjectType({ description: "The Time Line model" })
], fileDoc);
exports.fileDoc = fileDoc;
let Comments = class Comments {
};
__decorate([
    type_graphql_1.Field(type => User_1.User, { nullable: true }),
    typegoose_1.prop({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Comments.prototype, "user_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Comments.prototype, "content", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ type: Date }),
    __metadata("design:type", Date)
], Comments.prototype, "createdAt", void 0);
Comments = __decorate([
    type_graphql_1.ObjectType({ description: "The Time Line model" })
], Comments);
exports.Comments = Comments;
let TimeLine = class TimeLine {
    commentsCount(parent) {
        console.log(parent.comments);
        return parent.comments.length;
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], TimeLine.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], TimeLine.prototype, "content_title", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], TimeLine.prototype, "class_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], TimeLine.prototype, "content", void 0);
__decorate([
    type_graphql_1.Field(type => [fileDoc], { nullable: true }),
    typegoose_1.prop({ type: [fileDoc] }),
    __metadata("design:type", Array)
], TimeLine.prototype, "file", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], TimeLine.prototype, "type_content", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], TimeLine.prototype, "due", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], TimeLine.prototype, "point", void 0);
__decorate([
    type_graphql_1.Field(type => [UserTaskCollect_1.UserTaskCollection], { nullable: false }),
    typegoose_1.prop({ type: () => [UserTaskCollect_1.UserTaskCollection] }),
    __metadata("design:type", Array)
], TimeLine.prototype, "user_collect", void 0);
__decorate([
    type_graphql_1.Field(type => [Comments], { nullable: false }),
    typegoose_1.prop({ type: () => [Comments] }),
    __metadata("design:type", Array)
], TimeLine.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TimeLine]),
    __metadata("design:returntype", Number)
], TimeLine.prototype, "commentsCount", null);
__decorate([
    type_graphql_1.Field(type => User_1.User, { nullable: false }),
    typegoose_1.prop({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], TimeLine.prototype, "created_by", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Date)
], TimeLine.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, default: new Date().toISOString() }),
    __metadata("design:type", String)
], TimeLine.prototype, "updateAt", void 0);
TimeLine = __decorate([
    type_graphql_1.ObjectType({ description: "The Time Line model" })
], TimeLine);
exports.TimeLine = TimeLine;
exports.TimeLineModels = typegoose_1.getModelForClass(TimeLine);
//# sourceMappingURL=timeLine.js.map