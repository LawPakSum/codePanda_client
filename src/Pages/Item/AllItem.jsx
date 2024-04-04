import React, { useEffect, useState } from 'react';
import SingleItemRow from '../../Components/SingleItemRow';
import ItemFilter from '../../Components/ItemFilter';
import axios from 'axios';

function AllItem() {

  const [items, setItems] = useState([]);
  useEffect(()=>{
    let itemUrl = process.env.REACT_APP_SERVER_URL+"/getInstruments";
      axios.get(itemUrl).then((response)=>{
          const respData = response.data;
          setItems(respData);
      },[]).catch((error)=>{
        console.log(error);
      });
  },[]);

  return (
    <div>
      <ItemFilter></ItemFilter>
      <div className='items_page page_main'>
        <div className='items'>
          {
            items.map((item, index)=>{
              let info = {
                instrument_name: item.instrument_name,
                instrument_playstyle: item.instrument_playstyle,
                instrument_borrow_status: item.instrument_borrow_status,
                instrument_condition: item.instrument_condition,
                instrument_remark: item.instrument_remark,
              };
              return(
                item.instrument_remark!=="suspend"?<div className='single_item' key={index}>
                  <SingleItemRow info={info}></SingleItemRow>
                  <div className='item_borrow_button'>borrow</div>
                </div> :""
              )
            })                  
          }
        </div>
      </div>
    </div>
  );
}

export default AllItem;