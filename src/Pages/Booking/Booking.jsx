import React, { useEffect, useState } from 'react';
import ItemFilter from '../../Components/ItemFilter';
import BookingRow from '../../Components/BookingRow';
import axios from 'axios';
function Waiting() {
  const [instrumentBookings, setInstrumentBookings] = useState([]);
  useEffect(()=>{
    let userId = 2;
    let bookingUrl = process.env.REACT_APP_SERVER_URL+"/getBookingByUser";
    axios.post(bookingUrl, {
      user_id:userId
    }).then((response)=>{
      setInstrumentBookings(response.data);
    },[]).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div>
        <ItemFilter></ItemFilter>
        <div className='waiting_page page_main'>
            <div className='waiting_items'>
              {
                instrumentBookings.map((instrumentBooking, index)=>{
                  // let userBookingInfo
                  return(
                    <div className='waiting_single_item' key={index}>
                      <BookingRow info={instrumentBooking}></BookingRow>
                      <div className='waiting_item_queue'>queue no.:</div>
                      <div className='waiting_item_giveup_button'>giveup</div>
                    </div> 
                  )
                })
              }
            </div>
        </div>
    </div>
  );
}

export default Waiting;