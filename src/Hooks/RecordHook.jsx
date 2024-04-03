import axios from "axios"

function createRecord(booking_id){
    const record = {
        booking_id: booking_id,
        get_time: (new Date()).toJSON(),
        returned: "no"
    }
    let makeRecordUrl = process.env.REACT_APP_SERVER_URL+"/addRecord";
    axios.post(makeRecordUrl, record).catch((error)=>{
        console.log(error);
    })
}

export {createRecord};