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
exports.classResolver = void 0;
const typeDef_1 = require("./typeDef");
const User_1 = require("./../entities/User");
const Class_1 = require("./../entities/Class");
const type_graphql_1 = require("type-graphql");
const check_auth_1 = require("./../util/check-auth");
const apollo_server_express_1 = require("apollo-server-express");
let classResolver = class classResolver {
    getDetailRoom(id, { req }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const classRoom = yield Class_1.ClassModels.findById(id);
            if (!classRoom) {
                throw new apollo_server_express_1.UserInputError('Kelas Tidak Ditemukan ', {
                    errors: {
                        id: 'Kelas Tidak Ditemukan'
                    }
                });
            }
            const userId = [];
            for (let i = 0; i < ((_a = classRoom.user) === null || _a === void 0 ? void 0 : _a.length); i++) {
                userId.push(classRoom.user[i].id.toString());
            }
            if (!userId.includes(user.id.toString())) {
                throw new apollo_server_express_1.UserInputError('Ups Sepertinya Anda Mengakses Kelas Yang Salah ', {
                    errors: {
                        id: 'Ups Sepertinya Anda Mengakses Kelas Yang Salah '
                    }
                });
            }
            return classRoom;
        });
    }
    getClassNow({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            const UserDetail = yield User_1.UserModel.findById(user.id);
            const today = new Date().getDay();
            const todayClass = UserDetail.your_class.filter(data => data.lesson_days === today);
            console.log(todayClass);
            return todayClass;
        });
    }
    createClass({ name, subjects, lesson_day, description }, { req }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            console.log(user);
            //TODO : VALIDATION NAME MUST NOT BE EMPTY
            if (!name) {
                throw new apollo_server_express_1.UserInputError('Nama Kelas Wajib Di isi  ', {
                    errors: {
                        email: 'Nama Kelas Wajib Di isi '
                    }
                });
            }
            //TODO : CHECK  USER STILL LOGIN OR NOT
            if (!user) {
                throw new apollo_server_express_1.UserInputError('Sesi Anda Telah Berakhir ', {
                    errors: {
                        user: 'Sesi Anda Telah Berakhir,silahkan login Ulang '
                    }
                });
            }
            let user2 = yield User_1.UserModel.findById(user.id);
            const class_code = Math.random().toString(36).substring(7);
            const newClass = yield Class_1.ClassModels.create({
                name,
                code_class: class_code,
                description,
                subjects,
                lesson_day,
                createdAt: new Date().toISOString()
            });
            (_a = newClass.user) === null || _a === void 0 ? void 0 : _a.push({
                id: user2._id,
                email: user.email,
                photo: user.photo,
                name: user.name,
                isAdmin: true
            });
            yield newClass.save();
            (_b = user2.your_class) === null || _b === void 0 ? void 0 : _b.unshift({
                id: newClass.id,
                name: name,
                lesson_days: lesson_day
            });
            yield user2.save();
            console.log(user);
            return newClass;
        });
    }
    joinClass(code_class, { req }) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const user = check_auth_1.checkAuth(req);
            let user2 = yield User_1.UserModel.findById(user.id);
            const classRoom = yield Class_1.ClassModels.findOne({ code_class: code_class });
            if (!classRoom) {
                throw new apollo_server_express_1.UserInputError('Kelas Tidak Diteumakan ', {
                    errors: {
                        code_class: 'Kelas Tidak Ditemukan Atau Salah Kode Class'
                    }
                });
            }
            for (let i = 0; i < ((_a = classRoom.user) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (classRoom.user[i].id === user.id) {
                    console.log(user.id);
                    throw new apollo_server_express_1.UserInputError('Anda Telah Terdaftar Sebagai Anggota Kelas', {
                        errors: {
                            code_class: 'Anda Telah Terdaftar Sebagai Anggota Kelas'
                        }
                    });
                }
            }
            (_b = classRoom.user) === null || _b === void 0 ? void 0 : _b.unshift({
                id: user.id.toString(),
                email: user.email,
                photo: user.photo,
                name: user.name,
                isAdmin: false
            });
            yield classRoom.save();
            (_c = user2.your_class) === null || _c === void 0 ? void 0 : _c.push({
                id: classRoom.id,
                name: classRoom.name,
                lesson_days: classRoom.lesson_day
            });
            yield user2.save();
            return classRoom;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => Class_1.Classes),
    __param(0, type_graphql_1.Arg("id", () => String)), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], classResolver.prototype, "getDetailRoom", null);
__decorate([
    type_graphql_1.Query(() => [User_1.your_class]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], classResolver.prototype, "getClassNow", null);
__decorate([
    type_graphql_1.Query(() => String)
    // async getClassNow(@Ctx(){req} : MyContext ) : Promise<Classes>{
    //     const user : userData  = checkAuth(req)  
    //     const userDetail = await UserModel.findById(user.id)
    //     const d = new Date()
    //     userDetail.your_class.filter(data =>{
    //         return data.lesson_days === 
    //     })
    //     // userDetail.your_class.filter(lesson)
    //     // console.log(userDetail.your_class)
    //     // return 'hehehe'
    // }
    ,
    type_graphql_1.Mutation(() => Class_1.Classes),
    __param(0, type_graphql_1.Arg("data")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDef_1.createClass, Object]),
    __metadata("design:returntype", Promise)
], classResolver.prototype, "createClass", null);
__decorate([
    type_graphql_1.Mutation(() => Class_1.Classes),
    __param(0, type_graphql_1.Arg("code_class", () => String)), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], classResolver.prototype, "joinClass", null);
classResolver = __decorate([
    type_graphql_1.Resolver()
], classResolver);
exports.classResolver = classResolver;
//# sourceMappingURL=classResolver.js.map