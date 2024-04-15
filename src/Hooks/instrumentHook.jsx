import axios from "axios";

function addInstrument(instrument){
    let addInstumentUrl = process.env.REACT_APP_SERVER_URL+"/addInstrument";
    axios.post(addInstumentUrl, instrument).then(()=>{
    }).catch((error)=>{
        console.log(error);
    })
}

function updateInstrument(instrument){
    const updateInstrument = process.env.REACT_APP_SERVER_URL+"/updateInstrument";
    axios.put(updateInstrument, instrument).then(()=>{
    }).catch((error)=>{
        console.log(error);
    })
}

function deleteInstrument(id){
    const suspendInstrumentURL = process.env.REACT_APP_SERVER_URL+"/suspendInstrument";
    axios.post(suspendInstrumentURL, {instrument_id:id}).catch((error)=>{console.log(error)})
}   
export {addInstrument, updateInstrument, deleteInstrument};