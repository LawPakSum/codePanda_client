import React, { useState } from 'react';
import {addInstrument} from '../../Hooks/InstrumentHook';
import {useLocation} from 'react-router-dom';

function AddInstrument() {
    const location = useLocation();
    var uploader = () => {
      const instruemnt = {
        instrument_id:id,
        instrument_name: name,
        instrument_classification: classification,
        instrument_playstyle: playStyle,
        instrument_borrow_status: borrowStatus,
        instrument_condition: condition,
        instrument_remark: remark?remark:""
      }  
        addInstrument(instruemnt);
      
    }
  
    const [name, setName] = useState("");
    const [id, setId] = useState("")
    const [classification, setClassification] = useState("");
    const [playStyle, setPlayStyle] = useState("");
    const [borrowStatus, setBorrowStatus] = useState("");
    const [condition, setCondition] = useState("");
    const [remark, setRemark] = useState("");
    return (
      <div>
        <label className='new_ins_row'>Instrument Name:<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
        <label className='new_ins_row'>Instrument Classification: <input type='text' value={classification} onChange={(e)=>{setClassification(e.target.value)}}/></label>
        <label className='new_ins_row'>Instrument play style: <input type='text' value={playStyle} onChange={(e)=>{setPlayStyle(e.target.value)}}/></label>
        <label className='new_ins_row'>Instrument Borrow Status: <input type='text' value={borrowStatus} onChange={(e)=>{setBorrowStatus(e.target.value)}}/></label>
        <label className='new_ins_row'>Instrument Condition: <input type='text' value={condition} onChange={(e)=>{setCondition(e.target.value)}}/></label>
        <label className='new_ins_row'>Instrument Remark: <input type='text' value={remark} onChange={(e)=>{setRemark(e.target.value)}}/></label>
        <div className='singleItem_buttonSet'>
          <div className='singleItem_submit' onClick={()=>{uploader()}}>Submit</div>
          <div className='singleItem_cancel'>Cancel</div>
        </div>
      </div>
    );
  }

export default AddInstrument;