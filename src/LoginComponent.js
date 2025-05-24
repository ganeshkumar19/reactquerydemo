import React, { useState } from 'react'

const LoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassWord]= useState('')
    const [message, setMessage] = useState('')

    const signInHandler = ()=>{
        setMessage('loading')
        if(email==='ktsganeshkumar@gmail.com' && password==='ganesh@1910'){
            setTimeout(()=> setMessage('Login is Sucessful'), 2000)
        }else{
            setTimeout(()=> setMessage('invaldCredentials'), 2000)
        }
    }
  return (
    <div>
        <h3>Login</h3>
        <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} 
        placeholder='enter email' />
          <input type='text' value={password} onChange={(e)=> setPassWord(e.target.value)} 
        placeholder='enter password' />
        <button onClick={signInHandler}>Submit</button>
        {message && <p>{message}</p>}
    </div>

  )
}

export default LoginComponent