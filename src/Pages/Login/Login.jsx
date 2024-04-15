import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./Login.css";
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate()
    var verifyLogin = () => {
        const loginUrl = process.env.REACT_APP_SERVER_URL + "/verifyLogin";
        axios.post(loginUrl, {
            userName: username,
            userPassword: password
        }).then((response) => {
            if (response.data === "invalid") {

                removeCookie('identity', { path: '/', domain: 'localhost' });
                removeCookie('user_id', { path: '/', domain: 'localhost' });
                return navigate("/")
            }
            else {
                const head = response.data.split("-")[0];
                const tail = response.data.split("-")[1];
                setCookie('identity', head, { path: "/" });
                setCookie('user_id', tail, { path: "/" });
                return navigate("/")
            }
        }, [])
    }

    return (
        <div className='login_page'>
            <div className='left'>
                <h1 className='welcome_message'>Welcome Back</h1>
                <div className='login_guide'>Log in to your account using username and password</div>
                <div className='login_container'>

                    <label>
                        <input className='form-field'
                            placeholder='Username'
                            value={username}
                            type='text'
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </label>
                    <br />
                    <label>
                        <input className='form-field'
                            placeholder="Password"
                            value={password}
                            type='password'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </label>
                    <div className='login_button' onClick={verifyLogin}>Continue</div>
                </div>
            </div>
            <div className='right'>

            </div>
        </div>
    );
}

export default Login;