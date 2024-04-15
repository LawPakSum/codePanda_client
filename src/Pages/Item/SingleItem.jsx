import React, { useState } from 'react';
import {addInstrument, deleteInstrument, updateInstrument} from '../../Hooks/InstrumentHook';
import {useLocation} from 'react-router-dom';
import "./SingleItem.css"

function SingleItem() {

  const location = useLocation();
  var uploader = (order) => {
    const instruemnt = {
      instrument_id:id,
      instrument_name: name,
      instrument_classification: classification,
      instrument_playstyle: playStyle,
      instrument_borrow_status: borrowStatus,
      instrument_condition: condition,
      instrument_remark: remark?remark:""
    }
    if(order === "add"){
      addInstrument(instruemnt);
    }
    else{
      updateInstrument(instruemnt);
    }
  }

  
  const [existed,setExisted] = useState(location.state.instrument.instrument_id?true:false);
  const [name, setName] = useState(location.state.instrument.instrument_name);
  const [id, setId] = useState(location.state.instrument.instrument_id)
  const [classification, setClassification] = useState(location.state.instrument.instrument_classification);
  const [playStyle, setPlayStyle] = useState(location.state.instrument.instrument_playstyle);
  const [borrowStatus, setBorrowStatus] = useState(location.state.instrument.instrument_borrow_status);
  const [condition, setCondition] = useState(location.state.instrument.instrument_condition);
  const [remark, setRemark] = useState(location.state.instrument.instrument_remark);
  return (
    <div className='main_body'>
      {existed?<div>Instrument Id: {location.state.instrument.instrument_id}</div>:""}
      <label className='new_ins_row'>Instrument Name:<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
      <label className='new_ins_row'>Instrument Classification: <input type='text' value={classification} onChange={(e)=>{setClassification(e.target.value)}}/></label>
      <label className='new_ins_row'>Instrument play style: <input type='text' value={playStyle} onChange={(e)=>{setPlayStyle(e.target.value)}}/></label>
      <label className='new_ins_row'>Instrument Borrow Status: <input type='text' value={borrowStatus} onChange={(e)=>{setBorrowStatus(e.target.value)}}/></label>
      <label className='new_ins_row'>Instrument Condition: <input type='text' value={condition} onChange={(e)=>{setCondition(e.target.value)}}/></label>
      <label className='new_ins_row'>Instrument Remark: <input type='text' value={remark} onChange={(e)=>{setRemark(e.target.value)}}/></label>
      <div className='singleItem_buttonSet'>
        <div className='singleItem_submit' onClick={()=>{uploader(location.state.order)}}>Submit</div>
        <div className='singleItem_cancel'>Cancel</div>
        {existed?<div onClick={()=>{deleteInstrument(location.state.instrument.instrument_id)}}>suspend/activate</div>:""}
      </div>
    </div>
  );
}

export default SingleItem;