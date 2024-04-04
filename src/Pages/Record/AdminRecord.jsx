import React, { useEffect, useState } from 'react';
import ItemFilter from '../../Components/ItemFilter';
import RecordRow from '../../Components/RecordRow';
import  {createRecord} from '../../Hooks/RecordHook';
import axios from 'axios';

function AdminRecord() {

  const [records, setRecords] = useState([]);
  const [userId, setUserId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [instrumentBookings, setInstrumentBookings] = useState([]);

  useEffect(()=>{
    const itemUrl = process.env.REACT_APP_SERVER_URL+"/getRecordInfo";
    axios.get(itemUrl).then((response)=>{
      var targetRecords = [];
      response.data.map((record)=>{
        targetRecords.push(record);
      })
      setRecords(targetRecords);
    },[]).catch((error)=>{
      console.log(error);
    },[])
  },[])

  var userValueChange = ()=>{
    let bookingUrl = process.env.REACT_APP_SERVER_URL+"/getBookingByUser";
    axios.post(bookingUrl, {
      user_id:userId
    }).then((response)=>{
      setInstrumentBookings(response.data);
    },[]).catch((error)=>{
      console.log(error);
    })
  }

  var cRecord = ()=>{
    createRecord(bookingId);
  }

  useEffect(()=>{
    userValueChange();
  },[userId])
  return (
    <div>
        <ItemFilter></ItemFilter>
        <div className='records_page page_main'>
          <div className='record_create_record'>
            <div className='create_record_title'>Create Record: </div>  
            <label><input type="number" value={userId} onChange={(e)=>{
              setUserId(e.target.value);
            }}/></label>
            <label>
              <select id="userBooking" onChange={e=>setBookingId(e.target.value)}>
                <option defaultValue></option>
                {
                  instrumentBookings.map((instrumentBooking, index)=>{
                    
                    return(
                      instrumentBooking.booking.booking_status==="canceled" || new Date(instrumentBooking.booking.booking_to) < new Date() || instrumentBooking.booking.picked === "yes"?"":<option value={instrumentBooking.booking.booking_id} key={index} > instrument: {instrumentBooking.instrument.instrument_name}, Instrument ID:{instrumentBooking.instrument.instrument_id}</option>);
                  })

                }
              </select>
            </label>
            <div onClick={cRecord}>create</div>    
          </div>
          
            <div className='records_items'>
              {
                records.map((record, index)=>{
                  return(
                    <div className='single_item' key={index}>
                      <RecordRow info={record}></RecordRow>
                    </div> 
                  )
                })
              }
            </div>
        </div>
    </div>
  );
}

export default AdminRecord;