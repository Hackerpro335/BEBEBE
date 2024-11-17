function validatePassword(password) { 
    const passwordValid = "RegExp ";
    if (!password.match(passwordValid)) { 
        return 'Пароль должен содержать не менее 8 символов, одну букву в верхнем регистре, одну букву в нижнем регистре, одну цифру и один символ';
    }
    return null;
} 
module.exports = validatePassword;