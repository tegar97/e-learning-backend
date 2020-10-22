import { User } from './../entities/User';
import nodemailer from 'nodemailer';
import ejs from 'ejs'
import htmlToText from 'html-to-text'
var api_key = "187aa069fb01425f37f49cdcb919134e-0d2e38f7-a2028e40"
var domain = 'sandbox059d72f21137473a84ef7532276a723d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

import SMTPTransport from 'nodemailer/lib/smtp-transport';
export class Email {
    to: string;
    firstname :string;
    form: string 
    constructor(public user : User ,public url :string) {
        try {
            this.to = user.email;
            this.firstname = user.name;
            this.url = url;
            this.form = 'Tegar <tegar@gmai.com>'
            console.log(user.email)
            console.log(process.env.NODE_ENV)



        } catch (error) {
            console.log(error)
        }

    }
    newTransport() : any {
        if(process.env.NODE_ENV === 'development') {
            const mailOption = {
                host :  "smtp.mailtrap.io",
                port : 2525,
                auth : {
                    user : "06e7adc3c737a5",
                    pass: "6e2348cd3e1891"
                }

            } as SMTPTransport.Options
            return nodemailer.createTransport(mailOption) 
        }
    }
    async send(template:string,subject:string) : Promise<void>{
        try {
            const html = await ejs.renderFile(`${__dirname}/../views/${template}.ejs`,{
                firstName: this.firstname,
                url: this.url,
                subject
            })
            const mailOptions = {
                from :  this.form,
                to : this.to,
                subject,
                html :html,
                text : htmlToText.fromString(html)
            }
            if(process.env.NODE_ENV === 'production') {
                mailgun.messages().send(mailOptions, function (error:any, body:any) {
                    if(error){
                        console.log(error)
                    }
                    console.log(error)
                });
            }else{
                await this.newTransport().sendMail(mailOptions)

            }
        } catch (error) {
            console.log(error)
        }
    }
    async sendWelcome() {
        await this.send('email', 'Welcome to the skindialogue Family!');
      }
    async sendTask() {
        await this.send('emailNewTask', 'Ada Tugas Baru nih');

    }
    async sendPasswordReset() {
        await this.send('resetPassword', 'Reset Password anda ');
      }
}