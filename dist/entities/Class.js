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
exports.ClassModels = exports.Classes = exports.UserData = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let UserData = class UserData {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserData.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserData.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserData.prototype, "photo", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], UserData.prototype, "isAdmin", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: new Date().toISOString() }),
    __metadata("design:type", String)
], UserData.prototype, "createdAt", void 0);
UserData = __decorate([
    type_graphql_1.ObjectType({ description: "User Data Model" })
], UserData);
exports.UserData = UserData;
let Classes = class Classes {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Classes.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Classes.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Classes.prototype, "code_class", void 0);
__decorate([
    type_graphql_1.Field(type => [UserData], { nullable: false }),
    typegoose_1.prop({ type: () => [UserData] }),
    __metadata("design:type", Array)
], Classes.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Classes.prototype, "subjects", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Classes.prototype, "lesson_day", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: 'default.png' }),
    __metadata("design:type", String)
], Classes.prototype, "photo", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Classes.prototype, "createdAt", void 0);
Classes = __decorate([
    type_graphql_1.ObjectType({ description: "The User model" })
], Classes);
exports.Classes = Classes;
exports.ClassModels = typegoose_1.getModelForClass(Classes);
//# sourceMappingURL=Class.js.map