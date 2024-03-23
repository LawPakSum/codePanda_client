import React, {useState} from 'react';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <div className='login_container'>
            <div className='login_title'>Login</div>
            <label>
                <div className='login_label'>username:</div>
                <input 
                    value={username}
                    type='text'
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
            </label>
            <label>
                <div className='login_label'>password:</div>
                <input
                    value={password}
                    type='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </label>
            <div className='login_button'>continue</div>
        </div>
    </div>
  );
}

export default Login;