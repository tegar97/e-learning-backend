"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTimeLinePost = exports.validateLogin = exports.validateRegister = void 0;
exports.validateRegister = (email, password, confirmPassword) => {
    const errors = {};
    if (email.trim() === '') {
        errors.email = 'Email Must Not Be empty';
    }
    else {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regEx)) {
            errors.email = 'Email Must Be a valid email address';
        }
    }
    if (password.trim() === '') {
        errors.password = 'Password Wajib Di isi';
    }
    if (confirmPassword !== password) {
        errors.confirmPassword = "Password Tidak Sama Dengan Confirm Password";
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
exports.validateLogin = (email, password) => {
    const errors = {};
    if (email.trim() === '') {
        errors.email = 'Email Tidak Boleh Kosong';
    }
    if (password.trim() === '') {
        errors.password = 'Password Tidak Boleh Kosong';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
exports.validateTimeLinePost = (content) => {
    const errors = {};
    if (content.trim() === '') {
        errors.content = 'Panjang Pengumuman / Postingan Wajib Di isi';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
//# sourceMappingURL=validators.js.map