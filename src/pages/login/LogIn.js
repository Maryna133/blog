import React from 'react'
import { useState } from 'react'
import './LogIn.css'

const LogIn = () =>{
    const[email, setEmail] = useState('')    
    const[emailError, setEmailError] = useState('')

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect data')
        } else setEmailError('')
    
     }

    return <div className="login-container">        
                <h3 className="login-title">Login</h3>
                <div className="input"> 
                    <div className="input-field">
                        <label htmlFor="email" className="input-text"> email</label>
                        {emailError && <div className='input__error'>{emailError}</div>}
                        <input value={email} onChange={e => emailHandler(e)} type="text" id="email" name="email" ></input>
                    </div>
                    <div className="input-field">
                         <label htmlFor="password" className="input-text">password</label>
                        <input  type="text" id="password" name="password" ></input>
                    </div>
                    <button className="auth-bottom" >Login</button>
                 </div>  
            </div>          
}
export default LogIn; 