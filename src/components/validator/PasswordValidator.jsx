import React from 'react';
import { usePasswordValidator } from '../../hooks/usePasswordValidator';
import './PasswordValidator.css';

const PasswordValidator = () => {
    const {
        passwordStatus,
        handlePassword1Change,
        handlePassword2Change,
        handleSubmit,
    } = usePasswordValidator();
    console.log(passwordStatus)
    return (
        <div className='validator-container'>
            <div className='password-container'>
                <label htmlFor="password_1" className='password-label'>Password</label>
                <input type="text" onChange={handlePassword1Change} />
            </div>
            <div className='password-container'>
                <label htmlFor="password_2" className='password-label'>Confirm Password</label>
                <input type="text" onChange={handlePassword2Change} />
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <div className='error-container'>
                {passwordStatus && passwordStatus.map((message, index) => <div key={index}>{message}</div>)}
            </div>
        </div>
    );
}

export default PasswordValidator;
