import React from 'react';
import Main from '../Pages/Main/Main';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserHeader from '../Components/UserHeader';
import AllItem from '../Pages/Item/AllItem';
import Record from '../Pages/Record/Record';
import Booking from '../Pages/Booking/Booking';
import Logout from '../Pages/Login/Logout';
import SingleItem from '../Pages/Item/SingleItem';
import User from '../Pages/User/User';

function UserRouter() {
  return (
    <Router>
      <UserHeader></UserHeader>
      <Routes>
        {/* to be continue
        <Route path='/'></Route>
         */}
        <Route path='/home' element={<Main/>}/>
        <Route path='/items' element={<AllItem/>}/>
        <Route path='/records' element={<Record/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/addInstrument' element={<SingleItem
          instrument={
            {
              instrument_name: "",
              instrument_classification:"",
              instrument_playstyle:"",
              instrument_borrow_status:"",
              instrument_condition:"",
              instrument_remark:""
            }
          }
          order={"add"}
        />}/>
        <Route path='/users' element={<User/>}/>
      </Routes>
    </Router>
  );
}

export default UserRouter;
