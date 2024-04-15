import axios from "axios";
import {useNavigate} from "react-router-dom";

function makeBooking(user_id, instrument_id, booking_from, booking_to){
    const navigate = new useNavigate();

    let makeBookingUrl = process.env.REACT_APP_SERVER_URL+"/addBooking";
    let booking = {
        userId: user_id,
        instrument_id: instrument_id,
        booking_from: booking_from,
        booking_to: booking_to,
        booking_status: "available"
    }
    console.log(booking);
    axios.post(makeBookingUrl, {
        booking
    }).then((response)=>{
        alert("book success");
        navigate("/items");
    })
    .catch((error)=>{
        console.log(error);
    })
}

function cancelBooking(booking_id){
    let cancelBookingUrl = process.env.REACT_APP_SERVER_URL+"/cancelBooking";
    axios.post(cancelBookingUrl, {
        booking_id: booking_id
    },[]).catch((error)=>{
        console.log(error);
    },[])
}

export {makeBooking, cancelBooking};