import React from 'react';
import Item_Filter from '../../Components/Item_Filter';
import SingleItemRow from '../../Components/SingleItemRow';

function Record() {
  return (
    <div>
        <Item_Filter></Item_Filter>
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