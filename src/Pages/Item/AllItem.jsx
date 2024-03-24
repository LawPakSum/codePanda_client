import React from 'react';
import SingleItemRow from '../../Components/SingleItemRow';
import ItemFilter from '../../Components/ItemFilter';

function AllItem() {
  return (
    <div>
        <ItemFilter></ItemFilter>
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