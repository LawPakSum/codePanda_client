import React from 'react';
import Main from '../Pages/Main/Main';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserHeader from '../Components/UserHeader';
function UserRouter() {
  return (
    <Router>
      <UserHeader></UserHeader>
      <Routes>
        {/* to be continue
        <Route path='/'></Route>
        <Route path='/'></Route> */}
        <Route path='/home' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default UserRouter;
