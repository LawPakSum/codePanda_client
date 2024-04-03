import React, { useEffect } from 'react';

function UserRow(props) {
    var itt = ()=>{console.log(props)}
  return (
    <div>
        <div className='userRow'>
            <div className='userRow_detail'>
                <div className='userRow_id' onLoad={itt}>{props.user.user_id}</div>
                <div className='userRow_name'>{props.user.user_name}</div>
                <div className='userRow_identity'>{props.user.user_identity}</div>
            </div>
            <div className='userRow_button'>
                detail
            </div>
        </div>
    </div>
  );
}

export default UserRow;