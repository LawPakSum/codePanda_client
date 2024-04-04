import React, { useEffect, useState } from 'react';

function BookingRow(props) {

    const [info, setInfo] = useState(props.info);
  return (
    <div className='bookRow'>
        <div className='bookRow_icon'></div>
        <div>
            <div>
                <div className='bookRow_name'></div>
            </div>
            <div className='bookRow_content'>
                <div className='bookRow_from'>Booking from: {(info.booking.booking_from).split('T')[0]}</div>
                <div className='bookRow_to'>Booking To:{(info.booking.booking_to).split('T')[0]}</div>
                <div className='bookRow_status'>Status: {info.booking.booking_status}</div>
                <div className='bookRow_picked'>Picked: {info.booking.picked}</div>
                <div className='bookRow_name'>Name: {info.instrument.instrument_name}</div>
                <div className='bookRow_classification'>Classification: {info.instrument.instrument_classification}</div>
                <div className='bookRow_condition'>Condition: {info.instrument.instrument_condition}</div>
                <div className='bookRow_remark'>Remark: {info.instrument.instrument_remark}</div>
            </div>
        </div>
    </div>
  );
}

export default BookingRow;