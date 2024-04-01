import axios from "axios";

function addInstrument(instrument){
    let addInstumentUrl = process.env.REACT_APP_SERVER_URL+"/addInstrument";
    axios.post(addInstrument, instrument).catch((error)=>{
        console.log(error);
    })
}

export {addInstrument};