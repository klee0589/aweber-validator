import React, { useState, useEffect } from 'react';

const Validator = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [submit, setSubmit] = useState(false);

    const checkPassword = (passwords) => {
        console.log('1', passwords[0].length)
        console.log('2', passwords[1].length)
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


    useEffect(() => {
        if (submit) {
            checkPassword([password1, password2])
            setSubmit(toggleSubmit => !toggleSubmit)
        }
    }, [submit, password1, password2])


    return <div className='validator-container'>
        {passwordStatus}
        <div className='password-container'>
            <label htmlFor="password_1" className='password-label'>Password</label>
            <input type="text" onChange={(e) => setPassword1(e.target.value)} />
        </div>
        <div className='password-container'>
            <label htmlFor="password_2" className='password-label'>Confirm Password</label>
            <input type="text" onChange={(e) => setPassword2(e.target.value)} />
        </div>
        <button type='submit' onClick={() => {
            setSubmit(true)
        }}>Submit</button>
    </div>
}


export default Validator;