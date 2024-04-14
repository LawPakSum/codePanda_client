import React, { useEffect, useState } from 'react';
import SingleItemRow from '../../Components/SingleItemRow';
import ItemFilter from '../../Components/ItemFilter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminAllItem() {
    const [items, setItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const navigate = new useNavigate();

    // for filter
    const [filters, setFilters] = useState({
      id: '',
      name: '',
      classification: '',
      borrowStatus: '',
      playstyle: ''
    });

    const updateFilter = (newFilter)=>{
      setFilters(newFilter);
    }

    useEffect(()=>{
      var temp = items;
      temp = items.filter(i => i.instrument_name.startsWith(filters.name) && i.instrument_classification.startsWith(filters.classification) && i.instrument_borrow_status.startsWith(filters.borrowStatus) && i.instrument_playstyle.startsWith(filters.playstyle))
      setFilterItems(temp);
    },[filters])
    // end filter

    useEffect(()=>{
      let itemUrl = process.env.REACT_APP_SERVER_URL+"/getInstruments";
        axios.get(itemUrl).then((response)=>{
            const respData = response.data;
            setItems(respData);
            setFilterItems(respData);
        },[]).catch((error)=>{
          console.log(error);
        });
    },[]);
  
    var pageNav = (item)=>{
      navigate("/singleItem", {state:{instrument:item, order:"edit"}});
    }

    return (
      <div>
        <ItemFilter updateFilter={updateFilter}></ItemFilter>
        <div className='items_page page_main'>
          <div className='add_instrument' onClick={()=>{navigate("/addItem")}}>
            add instrumemt  
          </div>
          <div className='items'>
            {
              filterItems.map((item, index)=>{
                let info = {
                  instrument_name: item.instrument_name,
                  instrument_playstyle: item.instrument_playstyle,
                  instrument_classification: item.instrument_classification,
                  instrument_borrow_status: item.instrument_borrow_status,
                  instrument_condition: item.instrument_condition,
                  instrument_remark: item.instrument_remark,
                };
                return(
                  <div className='single_item' key={index}>
                    <SingleItemRow info={info}></SingleItemRow>
                    <div className='item_edit_button' onClick={()=>{pageNav(item)}}>Edit</div>
                  </div> 
                )
              })                  
            }
          </div>
        </div>
      </div>
    );
  }

export default AdminAllItem;