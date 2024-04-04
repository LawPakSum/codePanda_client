import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Logout from '../Pages/Login/Logout';
import Main from '../Pages/Main/Main';

function AdminRouter() {
  return (
    <Router>
      <Routes>
        {/* to be continue
        <Route path='/'></Route>
        <Route path='/'></Route> */}
        <Route path='/home' element={<Main/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Router>
  );
}

export default AdminRouter;