import React from 'react'
import { useState } from 'react'
import './SignUp.css'

const SignUp = () =>{
    const[email, setEmail] = useState('')    
    const[emailError, setEmailError] = useState('')

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect data')
        } else setEmailError('')
    
     }

    return <div className="signup-container">        
                <h3 className="signup-title">SingUp</h3>
                <div className="input">
                    <div className="input-field">
                        <label htmlFor="name" className="input-text">First Name</label>
                        <input type="text" id="first-name" name="first-name"/>
                    </div>
                    <div className="input-field">
                         <label htmlFor="name" className="input-text">Last Name</label>
                        <input type="text" id="last-name" name="last-name"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email" className="input-text"> Email</label>
                        {emailError && <div className='input__error'>{emailError}</div>}
                        <input  value={email} onChange={e => emailHandler(e)} type="text" id="email" name="email" ></input>
                    </div>
                    <div className="input-field">
                         <label htmlFor="password" className="input-text">Password</label>
                        <input type="text" id="password" name="password" ></input>
                    </div>
                    <div className="input-field">
                         <label htmlFor="password" className="input-text">Password</label>
                        <input type="text" id="password" name="password"></input>
                    </div>
                    <button className="signup-bottom">Sign Up</button>
                 </div>  
            </div>          
}
export default SignUp;