import React, { useEffect } from 'react';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
function Logout() {
  const navigate = new useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  var logout = ()=>{
    removeCookie("identity");
    removeCookie("user_id");
    navigate("/")
  }
  useEffect(()=>{
    logout()
  },[])
  return (
    <div >Logout</div>
  );
}

export default Logout;