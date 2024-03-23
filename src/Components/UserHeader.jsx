import React from 'react';
import { Link } from 'react-router-dom';
function UserHeader() {
  return (
    <div className='navigation'>
      <div className='navigation_icon'>

      </div>
      <div className='navigation_choices'>
        <Link to="/" className='navigation_single_choice'>Home</Link>
        <Link to="/items" className='navigation_single_choice'>items</Link>
        <Link to="/records" className='navigation_single_choice'>records</Link>
        <Link to="/waiting" className='navigation_single_choice'>waiting</Link>
        <Link to="/logout" className='navigation_single_choice'>logout</Link>
      </div>
    </div>
  )
}

export default UserHeader;