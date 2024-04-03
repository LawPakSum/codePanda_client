import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserRow from '../../Components/UserRow';
function User() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const userUrl = process.env.REACT_APP_SERVER_URL+"/getUsers";
        axios.get(userUrl).then((response)=>{
            setUsers(response.data);
        },[]).catch((error)=>{
            console.log(error);
        },[]);
    },[])

    useEffect(()=>{console.log(users)},[users])
  return (
    <div>
        {/*may be user filter*/}
        <div className='user_page page_main'>
            <div className='users_create'>create</div>
            <div className='users_list'>
                {
                    users.map((user)=>{
                        return(
                            <UserRow user={user}></UserRow>
                        )  
                    }, [])
                }
            </div>
        </div>
    </div>
  );
}

export default User;