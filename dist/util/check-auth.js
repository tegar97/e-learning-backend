"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.checkAuth = (context) => {
    //context = {..headers}
    const authHeader = context.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jsonwebtoken_1.default.verify(token, 'saya-adalah-seorang-pelajar-dan-anaks');
                return user;
            }
            catch (error) {
                throw new apollo_server_express_1.AuthenticationError('Invalid/Expired Token');
            }
        }
        throw new Error('Authentication token must be bearer token');
    }
    throw new Error('Authentication header must be provided');
};
//# sourceMappingURL=check-auth.js.map