export const checkPassword = ({ passwords, setPasswordStatus }) => {
    if (passwords.every(password => password.length > 6)) {
        const containsUppercase = passwords.some(password => /[A-Z]/.test(password));
        const containsLowercase = passwords.some(password => /[a-z]/.test(password));
        const containsNumber = passwords.some(password => /\d/.test(password));
        const containsSpecialChar = passwords.some(password => /[!@#$%^&*()_+={}\[\]|:;'"<,>.]/.test(password));

        const isValidPassword = containsUppercase && containsLowercase && containsNumber && containsSpecialChar

        if (isValidPassword) {
            setPasswordStatus('Password is valid');
        } else {
            setPasswordStatus('Password does not meet all criteria');
            if (!containsUppercase) {
                setPasswordStatus(preStatus => [...preStatus, 'requires 1 uppercase'])
            }
            if (!containsLowercase) {
                setPasswordStatus(preStatus => [...preStatus, 'requires 1 lowercase'])
            }
            if (!containsNumber) {
                setPasswordStatus(preStatus => [...preStatus, 'requires 1 number'])
            }
            if (!containsSpecialChar) {
                setPasswordStatus(preStatus => [...preStatus, 'requires 1 special character'])
            }
        }
    } else {
        setPasswordStatus('Password length is less than 7 characters');
    }
}