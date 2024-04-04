import React, { useState } from 'react';

function SingleItemRow(props) {
  const [info, setInfo] = useState(props.info);
  return (
    <div className='singleItem'>
      <div className='singleItem_icon'></div>
      <div >
        <div className='singleItem_name'>Name: {info.instrument_name}a</div>
        <div>
          <div className='singleItem_classification'>Classification: {info.instrument_classification}</div>
          <div className='singleItem_playstyle'>Playstyle: {info.instrument_playstyle}</div>
          <div className='singleItem_borrow_status'>Borrow Status: {info.instrument_borrow_status}</div>
          <div className='singleItem_condition'>Condition{info.instrument_condition}</div>
          <div className='singleItem_remark'>Remark:{info.instrument_remark}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleItemRow;