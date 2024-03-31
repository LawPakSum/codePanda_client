import React, { useState } from 'react';

function SingleItemRow(props) {
  const [info, setInfo] = useState(props.info);
  return (
    <div className='singleItem'>
      <div className='singleItem_icon'></div>
      <div >
        <div className='singleItem_name'>{info.instrument_name}a</div>
        <div>
          <div className='singleItem_classification'>{info.instrument_classification}</div>
          <div className='singleItem_playstyle'>{info.instrument_playstyle}</div>
          <div className='singleItem_borrow_status'>{info.instrument_borrow_status}</div>
          <div className='singleItem_condtion'>{info.instrument_condition}</div>
          <div className='singleItem_remark'>{info.instrument_remark}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleItemRow;