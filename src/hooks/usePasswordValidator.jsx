import { useState, useEffect } from 'react';
import { checkPasswordHelper } from '../utils/helpers';

export const usePasswordValidator = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [submit, setSubmit] = useState(false);
    const canSubmit = password1 && password2

    const { results, isValidPassword } = checkPasswordHelper({ passwords: [password1, password2] })

    useEffect(() => {
        if (submit) {
            setPasswordStatus(results)
            setSubmit(toggleSubmit => !toggleSubmit)
        }
    }, [submit, results]);

    useEffect(() => {
        if (!password1 || !password2 || !isValidPassword) {
            setPasswordStatus('')
        }
    }, [password1, password2, isValidPassword]);

    const handlePassword1Change = (e) => {
        setPassword1(e.target.value);
    }

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    }

    const handleSubmit = () => {
        setSubmit(true);
    }

    return {
        password1,
        password2,
        passwordStatus,
        handlePassword1Change,
        handlePassword2Change,
        handleSubmit,
        canSubmit,
        isValidPassword
    };
}
