import React from 'react';
import Item_Filter from '../../Components/Item_Filter';
import   SingleItemRow from '../../Components/SingleItemRow';
function Waiting() {
  return (
    <div>
        <Item_Filter></Item_Filter>
        <div className='waiting_page page_main'>
            <div className='waiting_items'>
                <div className='waiting_single_item'>
                    <SingleItemRow></SingleItemRow>
                    <div className='waiting_item_queue'>queue no.:</div>
                    <div className='waiting_item_giveup_button'>giveup</div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Waiting;