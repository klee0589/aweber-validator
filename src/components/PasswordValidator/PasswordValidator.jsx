import React, { useState } from 'react';
import { usePasswordValidator } from '../../hooks/usePasswordValidator';
import './PasswordValidator.css';

const PasswordValidator = () => {
    const {
        passwordStatus,
        handlePassword1Change,
        handlePassword2Change,
        handleSubmit,
        canSubmit,
        isValidPassword
    } = usePasswordValidator();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='validator-container'>
            <div className='validator-box'>
                <div className='password-container'>
                    <label className='password-label'>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handlePassword1Change}
                        data-testid="password-input"
                    />
                </div>
                <div className='password-container'>
                    <label className='password-label'>Confirm Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handlePassword2Change}
                        data-testid="confirm-password-input"
                    />
                </div>
                <div className='password-show'>
                    <input
                        type="checkbox"
                        id="view_password"
                        name="view_password"
                        onChange={() => setShowPassword(prevSetting => !prevSetting)}
                        data-testid="see-password-checkbox"
                    />
                    <label>see password</label>
                </div>
                <div className='submit-button-container'>
                    <button
                        disabled={!canSubmit}
                        className={`${!canSubmit ? 'disabled-submit-button' : 'enabled-submit-button'} submit-button`}
                        type='submit'
                        onClick={handleSubmit}
                        data-testid="submit-button"
                    >
                        Submit
                    </button>
                </div>
                <div className='message-container'>
                    {passwordStatus &&
                        passwordStatus.map((message, index) => (
                            <div
                                className={isValidPassword && canSubmit ? 'password-success' : 'password-failed'}
                                key={index}
                            >
                                {message}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default PasswordValidator;
