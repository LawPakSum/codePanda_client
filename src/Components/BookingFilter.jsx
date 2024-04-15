import React, { useState } from 'react';

function BookingFilter({updateBookingFilter}) {
    const [filters, setFilters] = useState({
        book_id: '',
        bookingFrom: '',
        bookingTo: '',
        bookingStatus: '',
        picked: ''
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        updateBookingFilter(updatedFilters); // Call the updateFilter function with the updated filters
    };
    
  return (
    <div className='filter'>
      <div>
        {/* <div className='bookingFilter_id'>
          <input type="text" name="book_id" value={filters.book_id} onChange={handleFilterChange} />
        </div> */}
        <div className='bookingFilter_bookingFrom'> Booking From:
          <input type="date" name="bookingFrom" value={filters.bookingFrom} onChange={handleFilterChange} />
        </div>
        <div className='bookingFilter_bookingTo'> Booking To:
          <input type="date" name="bookingTo" value={filters.bookingTo} onChange={handleFilterChange} />
        </div>
        <div className='bookingFilter_bookingStatus'> Booking Status:
          <select name="bookingStatus" value={filters.bookingStatus} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="cancel">Cancel</option>
          </select>
        </div>
        <div className='bookingFilter_picked'> Picked:
          <select name="picked" value={filters.picked} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BookingFilter;