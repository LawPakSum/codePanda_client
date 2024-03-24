import React from 'react';
import ItemFilter from '../../Components/ItemFilter';
import SingleItemRow from '../../Components/SingleItemRow';

function Record() {
  return (
    <div>
        <ItemFilter></ItemFilter>
        <div className='records_page page_main'>
            <div className='records_items'>
                <div className='single_item'>
                    <SingleItemRow></SingleItemRow>
                    <div className='records_item_from'>From:</div>
                    <div className='records_item_to'>To:</div>
                    <div className='records_item_status'>Status:</div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Record;