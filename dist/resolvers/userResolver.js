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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const email_1 = require("./../util/email");
const validators_1 = require("./../util/validators");
const type_graphql_1 = require("type-graphql");
const typeDef_1 = require("./typeDef");
const User_1 = require("./../entities/User");
const apollo_server_express_1 = require("apollo-server-express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
function genereteToken(user) {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
        photo: user.photo,
        name: user.name
    }, 'saya-adalah-seorang-pelajar-dan-anaks', { expiresIn: '1D' });
}
let UserResolver = class UserResolver {
    returnAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.UserModel.find();
        });
    }
    ;
    register({ name, email, password, confirmPassword }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valid, errors } = validators_1.validateRegister(email, password, confirmPassword);
            if (!valid) {
                throw new apollo_server_express_1.UserInputError('Errors', { errors });
            }
            const userCheck = yield User_1.UserModel.findOne({ email });
            if (userCheck) {
                throw new apollo_server_express_1.UserInputError('Email Sudah Ada Yang Pakai', {
                    errors: {
                        username: 'Email Sudah Ada Yang Pakai'
                    }
                });
            }
            password = yield bcrypt_1.default.hash(password, 12);
            const newUser = yield User_1.UserModel.create({
                name,
                email,
                password,
                confirmPassword
            });
            const token = genereteToken(newUser);
            return Object.assign(Object.assign({}, newUser._doc), { token });
        });
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ email });
            const { valid, errors } = validators_1.validateLogin(email, password);
            if (!valid) {
                throw new apollo_server_express_1.UserInputError('Errors', { errors });
            }
            if (!user) {
                errors.include = 'User Not Found';
                throw new apollo_server_express_1.UserInputError('Wrong Crenditials', { errors });
            }
            const match = yield bcrypt_1.default.compare(password, user.password);
            if (!match) {
                errors.include = 'Wrong Password , Check Again';
                throw new apollo_server_express_1.UserInputError('Wrong Password ', { errors });
            }
            const token = genereteToken(user);
            return Object.assign(Object.assign({}, user._doc), { token });
        });
    }
    forgotPassword({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Find User When email  === email Iinput 
            const user = yield User_1.UserModel.findOne({ email });
            if (!user) {
                throw new apollo_server_express_1.UserInputError('Email Tidak Terdaftar', {
                    errors: {
                        email: 'Email Tidak Terdaftar'
                    }
                });
            }
            //2.Generate the random reset token
            const resetToken = user.createPasswordResetToken();
            console.log(resetToken);
            yield user.save();
            //3.Send Email
            try {
                const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
                yield new email_1.Email(user, resetUrl).sendPasswordReset();
                return 'Check Email';
            }
            catch (error) {
                user.passwordResetExpire = undefined;
                user.passwordResetToken = undefined;
                yield user.save({
                    validateBeforeSave: false
                });
                throw new apollo_server_express_1.AuthenticationError('Gagal Kirim Email');
            }
        });
    }
    resetPassword({ password, passwordConfirm, tokenParams }) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedToken = crypto_1.default.createHash('sha256').update(tokenParams).digest('hex');
            if (password !== passwordConfirm) {
                throw new apollo_server_express_1.UserInputError('Password Confirm Salah', {
                    error: {
                        passwordConfirm: 'Password Confirm Tidak Sama Dengan Pssword'
                    }
                });
            }
            const user = yield User_1.UserModel.findOne({ passwordResetToken: hashedToken, passwordResetExpire: { $gt: Date.now() } });
            if (!user) {
                throw new apollo_server_express_1.AuthenticationError('Token Tidak Valid');
            }
            user.password = yield bcrypt_1.default.hash(password, 12);
            user.passwordResetToken = undefined;
            user.passwordResetExpire = undefined;
            yield user.save();
            const token = genereteToken(user);
            return Object.assign(Object.assign({}, user._doc), { token });
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "returnAllProduct", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => String),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.ForgotPassword]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.ResetPassword]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=userResolver.js.map