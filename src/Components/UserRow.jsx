import React from 'react';
import { useEffect } from 'react';

function UserRow(props) {

  return (
    <div>
        <div className='userRow'>
            <div className='userRow_detail'>
                <div className='userRow_id'>student Id: {props.user.user_id}</div>
                <div className='userRow_name'>Name: {props.user.userName}</div>
                <div className='userRow_identity'>Identity: {props.user.userIdentity}</div>
            </div>
        </div>
    </div>
  );
}

export default UserRow;