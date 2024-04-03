import axios from "axios";

function addInstrument(instrument){
    let addInstumentUrl = process.env.REACT_APP_SERVER_URL+"/addInstrument";
    axios.post(addInstumentUrl, instrument).catch((error)=>{
        console.log(error);
    })
}

function updateInstrument(instrument){
    const updateInstrument = process.env.REACT_APP_SERVER_URL+"/updateInstrument";
    axios.post(updateInstrument, instrument).catch((error)=>{
        console.log(error);
    })
}

function deleteInstrument(id){
    const deleteInstrumentURL = process.env.REACT_APP_SERVER_URL+"/deleteInstrument";
    axios.post(deleteInstrumentURL, {user_id:id}).catch((error)=>{console.log(error)})
}   
export {addInstrument, updateInstrument, deleteInstrument};