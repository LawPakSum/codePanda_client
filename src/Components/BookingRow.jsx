import React, { useEffect, useState } from 'react';

function BookingRow(props) {

    const [info, setInfo] = useState(props.info)

    useEffect(()=>{
        
    })
  return (
    <div className='bookRow'>
        {
            "div"+info.booking.booking_id+"</div>"+
            "div>"+info.instrument.instrument_name+"</div>"
        }
    </div>
  );
}

export default BookingRow;