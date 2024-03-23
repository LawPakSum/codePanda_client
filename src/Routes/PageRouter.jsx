import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from '../Pages/Login/Login';

function PageRouter() {
  return (
    <Router>
      <Routes>
        {/* to be continue
        <Route path='/'></Route>
        <Route path='/'></Route> */}
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default PageRouter;