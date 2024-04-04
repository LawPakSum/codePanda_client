import React from 'react';

function RecordRow(props) {
  return (
    <div className='recordRow'>
      <div className='record_user_id'>user ID:{props.info.user.user_id}</div>
      <div className='record_user_name'>user name:{props.info.user.user_name}</div>
      <div className='record_instrument_name'>Instrument: {props.info.instrument.instrument_name}</div>
      <div className='records_item_from'>From:{props.info.record.get_time}</div>
      <div className='records_item_to'>To:{props.info.record.return_time}</div>
      <div className='records_item_status'>Returned:{props.info.record.returned}</div>
    </div>
    
  );
}

export default RecordRow;