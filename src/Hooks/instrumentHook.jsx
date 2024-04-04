import axios from "axios";
import {useNavigate} from 'react-router-dom';

function addInstrument(instrument){
    const navigate = new useNavigate()
    let addInstumentUrl = process.env.REACT_APP_SERVER_URL+"/addInstrument";
    axios.post(addInstumentUrl, instrument).then(()=>{
        navigate("/items")
    }).catch((error)=>{
        console.log(error);
    })
}

function updateInstrument(instrument){
    const navigate = new useNavigate()
    const updateInstrument = process.env.REACT_APP_SERVER_URL+"/updateInstrument";
    axios.put(updateInstrument, instrument).then(()=>{
        navigate("/items")
    }).catch((error)=>{
        console.log(error);
    })
}

function deleteInstrument(id){
    const navigate = new useNavigate()
    const suspendInstrumentURL = process.env.REACT_APP_SERVER_URL+"/suspendInstrument";
    axios.post(suspendInstrumentURL, {instrument_id:id}).catch((error)=>{console.log(error)})
}   
export {addInstrument, updateInstrument, deleteInstrument};