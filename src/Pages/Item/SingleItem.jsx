import React, { useState } from 'react';
import {addInstrument, deleteInstrument, updateInstrument} from '../../Hooks/InstrumentHook';
function SingleItem(props) {
  var uploader = (order) => {
    const instruemnt = {
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
  const [existed,setExisted] = useState(props.instrument.instrument_id?true:false);
  const [name, setName] = useState(props.instrument.instrument_name);
  const [classification, setClassification] = useState(props.instrument.instrument_classification);
  const [playStyle, setPlayStyle] = useState(props.instrument.instrument_playstyle);
  const [borrowStatus, setBorrowStatus] = useState(props.instrument.instrument_borrow_status);
  const [condition, setCondition] = useState(props.instrument.instruemnt_condition);
  const [remark, setRemark] = useState(props.instrument.instruemnt_remark);
  return (
    <div>
      {existed?<div>Instrument Id: {props.instrument.instrument_id}+</div>:""}
      <label>Instrument Name:<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
      <label>Instrument Classification: <input type='text' value={classification} onChange={(e)=>{setClassification(e.target.value)}}/></label>
      <label>Instrument play style: <input type='text' value={playStyle} onChange={(e)=>{setPlayStyle(e.target.value)}}/></label>
      <label>Instrument Borrow Status: <input type='text' value={borrowStatus} onChange={(e)=>{setBorrowStatus(e.target.value)}}/></label>
      <label>Instrument Condition: <input type='text' value={condition} onChange={(e)=>{setCondition(e.target.value)}}/></label>
      <label>Instrument Remark: <input type='text' value={remark} onChange={(e)=>{setRemark(e.target.value)}}/></label>
      <div className='singleItem_buttonSet'>
        <div className='singleItem_submit' onClick={()=>{uploader(props.order)}}>Submit</div>
        <div className='singleItem_cancel'>Cancel</div>
        {existed?<div onClick={deleteInstrument(props.instrument.instrument_id)}>delete</div>:""}
      </div>
    </div>
  );
}

export default SingleItem;