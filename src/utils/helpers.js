export const checkPassword = ({ passwords }) => {
    let results = [];
    const passwordsLength = passwords.every(password => password.length > 6)
    const containsUppercase = passwords.some(password => /[A-Z]/.test(password));
    const containsLowercase = passwords.some(password => /[a-z]/.test(password));
    const containsNumber = passwords.some(password => /\d/.test(password));
    const containsSpecialChar = passwords.some(password => /[!@#$%^&*()_+={}\[\]|:;'"<,>.]/.test(password));

    const isValidPassword = containsUppercase && containsLowercase && containsNumber && containsSpecialChar

    if (isValidPassword) {
        results.push(['Password is valid']);
    } else {
        results.push(['Password does not meet all criteria']);
        if (!passwordsLength) {
            results.push(['Password length is less than 7 characters'])
        }
        if (!containsUppercase) {
            results.push(['requires 1 uppercase'])
        }
        if (!containsLowercase) {
            results.push(['requires 1 lowercase'])
        }
        if (!containsNumber) {
            results.push(['requires 1 number'])
        }
        if (!containsSpecialChar) {
            results.push(['requires 1 special character'])
        }
    }
    return results;
}
