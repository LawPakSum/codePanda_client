import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Logout from '../Pages/Login/Logout';
import Main from '../Pages/Main/Main';
import User from '../Pages/User/User';
import AdminAllItem from '../Pages/Item/AdminAllItem';
import AdminALlRecord from '../Pages/Record/AdminRecord';
import AdminBooking from '../Pages/Booking/AdminBooking';
import AdminHeader from '../Components/AdminHeader';
import SingleUser from '../Pages/User/SingleUser';
import SingleItem from '../Pages/Item/SingleItem';
import AddInstrument from '../Pages/Item/AddInstrument';

function AdminRouter() {
  return (
    <Router>
      <AdminHeader></AdminHeader>
      <Routes>        
        <Route path='/home' element={<Main/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/items' element={<AdminAllItem/>}/>
        <Route path='/records' element={<AdminALlRecord/>}/>
        <Route path='/booking' element={<AdminBooking/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/addItem' element={<AddInstrument/>}/>
        <Route path='/singleItem' element={<SingleItem/>}/>
        <Route path='/singleUser' element ={<SingleUser/>}/>

      </Routes>
    </Router>
  );
}

export default AdminRouter;