import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import {addUser} from '../../Hooks/UserHook';
import {useNavigate} from 'react-router-dom';

function SingleUser() {
  const navigate = new useNavigate();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [records, setRecords] = useState([]);

    const location = useLocation();
    // useEffect(()=>{
    //     const itemUrl = process.env.REACT_APP_SERVER_URL+"/getRecordInfo";
    //     const userId = 
    //     axios.get(itemUrl).then((response)=>{
    //       var targetRecords = [];
    //       response.data.map((record)=>{
    //         if(record.user.user_id === userId){
    //           targetRecords.push(record);
    //         }
    //       })
    //       setRecords(targetRecords);
    //     },[]).catch((error)=>{
    //       console.log(error);
    //     },[])
    //   },[])
  return (
    <div>
        <div className='user_info'>
            {/* {exist?<div>User Id: {props.user.user_id}</div>:""} */}
            <label>User Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
            <label>Password:<input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
            <div className='user_cancel' onClick={()=>{navigate("/users")}}>cancel</div>
            <div className='user_submit' onClick={()=>{
              addUser(
              {
                userName:name,
                userPassword:password,
                userIdentity:"student"
              } 
            )
            navigate("/users")
            }}>sumbit</div>
        </div>
        {/* <div className='user_borrow_record'>
            {exist?<div className='borrow_record_title'>Borrow Record</div>:""}
            
            <table>
            <tr>
                <th>instruemnt id {}</th>
                <th>instruemnt name</th>
                <th>get time</th>
                <th>return time</th>
                <th>returned</th>
            </tr>
                {records.map((record)=>{
                    return(
                        <tr>
                            <td>{record.instrument.instrument_id}</td>
                            <td>{record.instrument.instrument_name}</td>
                            <td>{record.record.get_time}</td>
                            <td>{record.record.return_time?record.record.return_time:""}</td>
                            <td>{record.record.returned}</td>
                        </tr>
                    )
                    })
                }
             </table>
            
        </div> */}
    </div>
  );
}

export default SingleUser;