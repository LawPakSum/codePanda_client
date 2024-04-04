import axios from "axios";

function makeBooking(user_id, instrument_id, booking_from, booking_to){
    let makeBookingUrl = process.env.REACT_APP_SERVER_URL+"/addBooking";
    let booking = {
        userId: user_id,
        instrument_id: instrument_id,
        booking_from: booking_from.toJSON(),
        booking_to: booking_to.toJSON(),
        booking_status: "available"
    }
    axios.post(makeBookingUrl, {
        booking
    }).catch((error)=>{
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