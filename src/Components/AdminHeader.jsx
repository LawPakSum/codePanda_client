import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div className='navigation'>
      <div className='navigation_icon'>
      </div>
      <div className='navigation_choices'>
        <Link to="/" className='navigation_single_choice'>Home</Link>
        <Link to="/users" className='navigation_single_choice'>Users</Link>
        <Link to="/items" className='navigation_single_choice'>Items</Link>
        <Link to="/records" className='navigation_single_choice'>Records</Link>
        <Link to="/booking" className='navigation_single_choice'>Booking</Link>
        <Link to="/logout" className='navigation_single_choice'>Logout</Link>
      </div>
    </div>
  );
}

export default AdminHeader;