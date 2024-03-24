import React from 'react';
import ItemFilter from '../../Components/ItemFilter';
import   SingleItemRow from '../../Components/SingleItemRow';
function Waiting() {
  return (
    <div>
        <ItemFilter></ItemFilter>
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