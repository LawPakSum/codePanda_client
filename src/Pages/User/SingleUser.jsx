import React, { useEffect, useState } from 'react';
import axios from 'axios';
function SingleUser(props) {
    const [exist, setExist] = useState(props.user.user_id?true:false);
    const [name, setName] = useState(props.user.user_name);
    const [password, setPassword] = useState(props.user.user_password);
    const [records, setRecords] = useState([]);

    useEffect(()=>{
        const itemUrl = process.env.REACT_APP_SERVER_URL+"/getRecordInfo";
        const userId = props.user.user_id;
        axios.get(itemUrl).then((response)=>{
          var targetRecords = [];
          response.data.map((record)=>{
            if(record.user.user_id === userId){
              targetRecords.push(record);
            }
          })
          setRecords(targetRecords);
        },[]).catch((error)=>{
          console.log(error);
        },[])
      },[])
  return (
    <div>
        <div className='user_info'>
            {exist?<div>User Id: {props.user.user_id}</div>:""}
            <label>User Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
            <label><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
            <div className='user_cancel'>cancel</div>
            <div className='user_submit'>sumbit</div>
        </div>
        <div className='user_borrow_record'>
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
            
        </div>
    </div>
  );
}

export default SingleUser;