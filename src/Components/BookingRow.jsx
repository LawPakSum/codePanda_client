import React, { useEffect, useState } from 'react';

function BookingRow(props) {

    const [info, setInfo] = useState(props.info)

    useEffect(()=>{
        
    })
  return (
    <div className='bookRow'>
        <div className='bookRow_icon'></div>
        <div>
            <div>
                <div className='bookRow_name'></div>
            </div>
            <div className='bookRow_content'>
                <div className='bookRow_from'>{(info.booking.booking_from).split('T')[0]}</div>
                <div className='bookRow_to'>{(info.booking.booking_to).split('T')[0]}</div>
                <div className='bookRow_status'>{info.booking.booking_status}</div>
                <div className='bookRow_picked'>{info.booking.booking_picked}</div>
                <div className='bookRow_name'>{info.instrument.instrument_name}</div>
                <div className='bookRow_classification'>{info.instrument.instrument_classification}</div>
                <div className='bookRow_condition'>{info.instrument.instrument_condition}</div>
                <div className='bookRow_remark'>{info.instrument.instrument_remark}</div>
            </div>
        </div>
    </div>
  );
}

export default BookingRow;