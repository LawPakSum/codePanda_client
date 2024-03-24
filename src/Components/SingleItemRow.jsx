import React from 'react';

function SingleItemRow() {
  return (
    <div>
        <div className='item_icon'></div>
        <div className='item_detail'>
            <div className='item_name'></div>
            <div className='item_classification'></div>
            <div className='item_playstyle'></div>
            <div className='item_borrow_status'></div>
            <div className='item_condition'></div>
            <div className='item_remark'></div>
        </div>
    </div>
  );
}

export default SingleItemRow;