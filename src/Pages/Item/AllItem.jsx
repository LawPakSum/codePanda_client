import React from 'react';
import SingleItemRow from '../../Components/SingleItemRow';
import Item_Filter from '../../Components/Item_Filter';

function AllItem() {
  return (
    <div>
        <Item_Filter></Item_Filter>
        <div className='items_page page_main'>
            <div className='items'>
                <div className='single_item'>
                    <SingleItemRow></SingleItemRow>
                    <div className='item_borrow_button'>borrow</div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default AllItem;