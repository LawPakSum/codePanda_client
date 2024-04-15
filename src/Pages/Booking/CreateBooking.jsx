import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useLocation} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function CreateBooking() {
  const [startDate, setStartDate] = useState(new Date().toJSON().split("T")[0]);
  const [endDate, setEndDate] = useState(new Date().toJSON().split("T")[0]);
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [filteredMondaysInCurrentMonth, setFilteredMondaysInCurrentMonth] = useState([new Date()]);
  const navigate = new useNavigate();

  useEffect(()=>{
    let checkIfReturnUrl = process.env.REACT_APP_SERVER_URL+"/checkBorrowAllow";
    axios.post(checkIfReturnUrl, {user_id:cookies.user_id})
    .then((response)=>{
      if(response.data){//if true means having a unreturned
        alert("You cannot borrow anymore until you return it");
        navigate("/items")
      }
    })

    let getBookingTimeURL = process.env.REACT_APP_SERVER_URL+"/getBookingTime";
    const currentDate = new Date();
    axios.post(getBookingTimeURL, {
        booking_from:(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)).toJSON(),
        booking_to:(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)).toJSON()
      }).then((response)=>{
        const B = response.data;
        setFilteredMondaysInCurrentMonth(getMondaysInMonth(undefined, undefined, B));
      });
  }, [])


  function getMondaysInMonth(year = new Date().getFullYear(), month = new Date().getMonth(), B = []) {
    const date = new Date(year, month, 1);
    const mondays = [];
  
    // Set the date to the first Monday of the month
    while (date.getDay() !== 1) {
      date.setDate(date.getDate() + 1);
    }
  
    // Add each Monday to the array
    while (date.getMonth() === month) {
      const tempDate = new Date(date)
      const mondayDate = (new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1)).toJSON().split('T')[0];
      if (!B.some(dateFromB => dateFromB.split("T")[0] == mondayDate)) {
        mondays.push(mondayDate);
      }
      date.setDate(date.getDate() + 7);
    }
    return mondays;
  }

  function makeBooking(user_id, instrument_id, booking_from, booking_to){
    let makeBookingUrl = process.env.REACT_APP_SERVER_URL+"/addBooking";
    let booking = {
        "userId": user_id,
        "instrument_id": instrument_id,
        "booking_from": new Date(booking_from).toJSON(),
        "booking_to": new Date(booking_to).toJSON(),
        "booking_status": "available"
    }
    axios.post(makeBookingUrl, {
      "userId": user_id,
      "instrument_id": instrument_id,
      "booking_from": new Date(booking_from).toJSON(),
      "booking_to": new Date(booking_to).toJSON(),
      "booking_status": "available",
      "picked":"no"
    }).then((response)=>{
      console.log(response.data);
        alert("book success");
        navigate("/items");
    })
    .catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className="main_body">
      <DatePicker selected={startDate} onChange={
        (date) => {
          setStartDate(date.toJSON().split("T")[0]);
          const tempDate = new Date(date);
          const end = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 7);
          setEndDate(end.toJSON().split("T")[0]);
        }
      } 
      
      

      includeDates={filteredMondaysInCurrentMonth}
      placeholderText="Select a Monday"
      calendarStartDay={1}
      inline
      />

      <div className="booking_info">
        <div className="booking_info_name">Name: {location.state.instrument.instrument_name}</div>
        <div className="booking_info_classification">Classification: {location.state.instrument.instrument_classification}</div>
        <div className="booking_info_playstyle">PLay Style:{location.state.instrument.instrument_playstyle}</div>
        <div className="booking_info_tryFrom">Try to booking from: {startDate}</div>
        <div className="booking_info_tryTo">Try to booking from: {endDate}</div>
      </div>

      <div className="create_booking_borrow_button" onClick={()=>{
        makeBooking(cookies.user_id, location.state.instrument.instrument_id, startDate, endDate)
      }}>Borrow</div>
    </div>
  );
}

export default CreateBooking;