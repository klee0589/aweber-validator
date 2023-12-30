import { useState, useEffect } from 'react';
import { checkPassword } from '../utils/helpers';

export const usePasswordValidator = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (submit) {
            checkPassword({ passwords: [password1, password2], setPasswordStatus })
            setSubmit(toggleSubmit => !toggleSubmit)
        }
    }, [submit, password1, password2]);

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
    };
}
