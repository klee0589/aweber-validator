import React, { useState, useEffect } from 'react';

const Validator = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    // const [passwordStatus, setPasswordStatus] = useState('');
    const [submit, setSubmit] = useState(false);

    const checkPassword = (paswords) => {
        // check password logic here 
    }


    useEffect(() => {
        if (submit) {
            checkPassword([password1, password2])
        }
    }, [submit, password1, password2])


    return <div className='validator-container'>
        {/* {passwordStatus} */}
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