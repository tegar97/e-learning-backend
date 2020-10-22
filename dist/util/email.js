"use strict";
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
exports.Email = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const html_to_text_1 = __importDefault(require("html-to-text"));
var api_key = "187aa069fb01425f37f49cdcb919134e-0d2e38f7-a2028e40";
var domain = 'sandbox059d72f21137473a84ef7532276a723d.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
class Email {
    constructor(user, url) {
        this.user = user;
        this.url = url;
        try {
            this.to = user.email;
            this.firstname = user.name;
            this.url = url;
            this.form = 'Tegar <tegar@gmai.com>';
            console.log(user.email);
            console.log(process.env.NODE_ENV);
        }
        catch (error) {
            console.log(error);
        }
    }
    newTransport() {
        if (process.env.NODE_ENV === 'development') {
            const mailOption = {
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "06e7adc3c737a5",
                    pass: "6e2348cd3e1891"
                }
            };
            return nodemailer_1.default.createTransport(mailOption);
        }
    }
    send(template, subject) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const html = yield ejs_1.default.renderFile(`${__dirname}/../views/${template}.ejs`, {
                    firstName: this.firstname,
                    url: this.url,
                    subject
                });
                const mailOptions = {
                    from: this.form,
                    to: this.to,
                    subject,
                    html: html,
                    text: html_to_text_1.default.fromString(html)
                };
                if (process.env.NODE_ENV === 'production') {
                    mailgun.messages().send(mailOptions, function (error, body) {
                        if (error) {
                            console.log(error);
                        }
                        console.log(error);
                    });
                }
                else {
                    yield this.newTransport().sendMail(mailOptions);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    sendWelcome() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('email', 'Welcome to the skindialogue Family!');
        });
    }
    sendTask() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('emailNewTask', 'Ada Tugas Baru nih');
        });
    }
    sendPasswordReset() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('resetPassword', 'Reset Password anda ');
        });
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map