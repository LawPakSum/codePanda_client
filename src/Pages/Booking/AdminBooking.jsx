import React, { useEffect, useState } from 'react';
import ItemFilter from '../../Components/ItemFilter';
import BookingRow from '../../Components/BookingRow';
import {cancelBooking} from '../../Hooks/BookingHook'
import axios from 'axios';
import BookingFilter from '../../Components/BookingFilter';
function AdminBooking() {
  const [instrumentBookings, setInstrumentBookings] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  // for filter
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    classification: '',
    borrowStatus: '',
    playstyle: '',
    book_id: '',
    bookingFrom: '',
    bookingTo: '',
    bookingStatus: '',
    picked: ''
  });

  const updateFilter = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      id: newFilter.id,
      name: newFilter.name,
      classification: newFilter.classification,
      borrowStatus: newFilter.borrowStatus,
      playstyle: newFilter.playstyle
    }));
  };
  
  const updateBookingFilter = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      book_id: newFilter.book_id,
      bookingFrom: newFilter.bookingFrom,
      bookingTo: newFilter.bookingTo,
      bookingStatus: newFilter.bookingStatus,
      picked: newFilter.picked
    }));
  };

  useEffect(()=>{
    var temp = instrumentBookings.filter(i =>
      i.instrument.instrument_name.startsWith(filters.name) &&
      i.instrument.instrument_classification.startsWith(filters.classification) &&
      i.instrument.instrument_borrow_status.startsWith(filters.borrowStatus) &&
      i.instrument.instrument_playstyle.startsWith(filters.playstyle) &&
      i.booking.booking_status.startsWith(filters.bookingStatus) &&
      i.booking.picked.startsWith(filters.picked) 
    )
    if(filters.bookingFrom){
      temp = temp.filter(i => new Date(i.booking.booking_from) >= new Date(filters.bookingFrom))
    }
    if(filters.bookingTo){
      temp = temp.filter(i => new Date(i.booking.booking_to) <= new Date(filters.bookingTo))
    }
    setFilterItems(temp)
  }, [filters])

  //end filter
  useEffect(()=>{
    let bookingUrl = process.env.REACT_APP_SERVER_URL+"/getBookingByUsers";
    axios.get(bookingUrl).then((response)=>{
      setInstrumentBookings(response.data);
      setFilterItems(response.data)
    },[]).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div>
      <ItemFilter updateFilter={updateFilter}></ItemFilter>
      <BookingFilter updateBookingFilter={updateBookingFilter}></BookingFilter>
      <div className='waiting_page page_main'>
        <div className='waiting_items'>
          {
            filterItems.map((instrumentBooking, index)=>{
              // let userBookingInfo
              return(
                <div className='waiting_single_item' key={index}>
                  <BookingRow info={instrumentBooking}></BookingRow>                      
                  {instrumentBooking.booking.booking_status==="canceled" || new Date(instrumentBooking.booking.booking_to) < new Date() || instrumentBooking.booking.picked === "yes"?
                    "":<div className='waiting_item_giveup_button' onClick={()=>{cancelBooking(instrumentBooking.booking.booking_id)}}>Cancel</div>                      
                  }
                </div> 
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default AdminBooking;