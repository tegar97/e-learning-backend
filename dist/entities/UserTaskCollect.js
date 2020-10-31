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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTaskCollectionModel = exports.UserTaskCollection = exports.fileDoc2 = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let fileDoc2 = class fileDoc2 {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], fileDoc2.prototype, "file_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], fileDoc2.prototype, "file_type", void 0);
fileDoc2 = __decorate([
    type_graphql_1.ObjectType({ description: "The Time Line model" })
], fileDoc2);
exports.fileDoc2 = fileDoc2;
let UserTaskCollection = class UserTaskCollection {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UserTaskCollection.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => [fileDoc2], { nullable: true }),
    typegoose_1.prop({ type: [fileDoc2] }),
    __metadata("design:type", Array)
], UserTaskCollection.prototype, "task_file", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserTaskCollection.prototype, "user_name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserTaskCollection.prototype, "user_photo", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserTaskCollection.prototype, "user_email", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserTaskCollection.prototype, "task_message_online", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Date)
], UserTaskCollection.prototype, "upload_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], UserTaskCollection.prototype, "isLate", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typegoose_1.prop({ default: null }),
    __metadata("design:type", Number)
], UserTaskCollection.prototype, "point", void 0);
UserTaskCollection = __decorate([
    type_graphql_1.ObjectType({ description: "The UserTaskCollection model" })
], UserTaskCollection);
exports.UserTaskCollection = UserTaskCollection;
exports.UserTaskCollectionModel = typegoose_1.getModelForClass(UserTaskCollection);
//# sourceMappingURL=UserTaskCollect.js.map