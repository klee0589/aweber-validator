import React from 'react';
import { usePasswordValidator } from '../../hooks/useValidator';

const Validator = () => {
    const {
        passwordStatus,
        handlePassword1Change,
        handlePassword2Change,
        handleSubmit,
    } = usePasswordValidator();

    return (
        <div className='validator-container'>
            {passwordStatus}
            <div className='password-container'>
                <label htmlFor="password_1" className='password-label'>Password</label>
                <input type="text" onChange={handlePassword1Change} />
            </div>
            <div className='password-container'>
                <label htmlFor="password_2" className='password-label'>Confirm Password</label>
                <input type="text" onChange={handlePassword2Change} />
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Validator;
