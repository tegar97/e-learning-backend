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
exports.collectAssigment = exports.EditTimeLine = exports.getDetailsData = exports.createTimeLine = exports.getDetailClass = exports.JoinClass = exports.createClass = exports.ResetPassword = exports.ForgotPassword = exports.LoginInput = exports.RegisterInput = void 0;
const type_graphql_1 = require("type-graphql");
//===================================== Type Auth ====================================
let RegisterInput = class RegisterInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterInput.prototype, "confirmPassword", void 0);
RegisterInput = __decorate([
    type_graphql_1.InputType()
], RegisterInput);
exports.RegisterInput = RegisterInput;
let LoginInput = class LoginInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    type_graphql_1.InputType()
], LoginInput);
exports.LoginInput = LoginInput;
let ForgotPassword = class ForgotPassword {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ForgotPassword.prototype, "email", void 0);
ForgotPassword = __decorate([
    type_graphql_1.InputType()
], ForgotPassword);
exports.ForgotPassword = ForgotPassword;
let ResetPassword = class ResetPassword {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResetPassword.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResetPassword.prototype, "passwordConfirm", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResetPassword.prototype, "tokenParams", void 0);
ResetPassword = __decorate([
    type_graphql_1.InputType()
], ResetPassword);
exports.ResetPassword = ResetPassword;
//===================================== END Type Auth ====================================
//=====================================  Type Class ======================================
let createClass = class createClass {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], createClass.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], createClass.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], createClass.prototype, "subjects", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], createClass.prototype, "lesson_day", void 0);
createClass = __decorate([
    type_graphql_1.InputType()
], createClass);
exports.createClass = createClass;
let JoinClass = class JoinClass {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], JoinClass.prototype, "code_class", void 0);
JoinClass = __decorate([
    type_graphql_1.InputType()
], JoinClass);
exports.JoinClass = JoinClass;
let getDetailClass = class getDetailClass {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], getDetailClass.prototype, "id", void 0);
getDetailClass = __decorate([
    type_graphql_1.InputType()
], getDetailClass);
exports.getDetailClass = getDetailClass;
//===================================== END Type Class ===================================
let createTimeLine = class createTimeLine {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], createTimeLine.prototype, "content_title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], createTimeLine.prototype, "content", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], createTimeLine.prototype, "type_content", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], createTimeLine.prototype, "class_id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], createTimeLine.prototype, "point", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], createTimeLine.prototype, "due", void 0);
createTimeLine = __decorate([
    type_graphql_1.InputType()
], createTimeLine);
exports.createTimeLine = createTimeLine;
let getDetailsData = class getDetailsData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], getDetailsData.prototype, "id", void 0);
getDetailsData = __decorate([
    type_graphql_1.InputType()
], getDetailsData);
exports.getDetailsData = getDetailsData;
let EditTimeLine = class EditTimeLine {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EditTimeLine.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], EditTimeLine.prototype, "content_title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], EditTimeLine.prototype, "content", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], EditTimeLine.prototype, "point", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], EditTimeLine.prototype, "due", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], EditTimeLine.prototype, "isActive", void 0);
EditTimeLine = __decorate([
    type_graphql_1.InputType()
], EditTimeLine);
exports.EditTimeLine = EditTimeLine;
let collectAssigment = class collectAssigment {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], collectAssigment.prototype, "task_message_online", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], collectAssigment.prototype, "timeLineId", void 0);
collectAssigment = __decorate([
    type_graphql_1.InputType()
], collectAssigment);
exports.collectAssigment = collectAssigment;
//# sourceMappingURL=typeDef.js.map