import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserFilter from '../../Components/UserFilter';
import UserRow from '../../Components/UserRow';
import {useNavigate} from "react-router-dom"
function User() {
    const navigate = new useNavigate();
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({
        id:"",
        name:""
    });
    const [filterUsers, setFilterUsers] = useState([]);

    //for filter
    const updateFilter = (newFilter)=>{
        setFilters(newFilter);
    }

    useEffect(()=>{
        var temp = users;
        temp = users.filter(i => (i.userName).startsWith(filters.name));
        setFilterUsers(temp);
    }, [filters])
    //end filter

    useEffect(()=>{
        const userUrl = process.env.REACT_APP_SERVER_URL+"/getUsers";
        axios.get(userUrl).then((response)=>{
            setUsers(response.data);
            setFilterUsers(response.data)
        },[]).catch((error)=>{
            console.log(error);
        },[]);
    },[])

 

  return (
    <div>
        <UserFilter updateFilter={updateFilter}></UserFilter>
        <div className='user_page page_main'>
            <div className='users_create' onClick={()=>{
                navigate("/singleUser")
            }}>create</div>
            <div className='users_list'>
                {
                    filterUsers.map((user, index)=>{
                        return(
                            <UserRow user={user} key={index}></UserRow>
                        )  
                    }, [])
                }
            </div>
        </div>
    </div>
  );
}

export default User;