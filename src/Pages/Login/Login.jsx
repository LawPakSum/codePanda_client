import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate()
    var verifyLogin = ()=>{
        const loginUrl = process.env.REACT_APP_SERVER_URL+"/verifyLogin";
        axios.post(loginUrl, {
            userName: username,
            userPassword: password
        }).then((response)=>{
            if(response.data === "invalid"){
                
                removeCookie('identity', { path: '/', domain: 'localhost' });
                removeCookie('user_id', { path: '/', domain: 'localhost' });
                return navigate("/")
            }
            else{
                const head = response.data.split("-")[0];
                const tail = response.data.split("-")[1];
                setCookie('identity', head,{path:"/"});
                setCookie('user_id', tail, {path:"/"});
                console.log(cookies.identity);
                return navigate("/home")
            }
        },[])
    }

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
            <div className='login_button' onClick={verifyLogin}>continue</div>
        </div>
    </div>
  );
}

export default Login;