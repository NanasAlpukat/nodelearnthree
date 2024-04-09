import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../views/Login';
import Home from '../views/Home';
import About from '../views/About';
import Errors from '../views/Errors';
import AuthCheck from '../middleware/checkAuth';
import ChekckStorage from '../middleware/checkStorage';
import BlankPage from '../views/BlankPage';
import AuthLogin from '../middleware/checkLogin';

const Router = () => {
 
  return (
    <Routes>
      <Route path="/" element={<ChekckStorage><AuthCheck><Navbar /></AuthCheck></ChekckStorage>}>
        
          <Route path="/" element={<AuthCheck><Home /></AuthCheck>} />
          <Route path="/about" element={<AuthCheck><About /></AuthCheck>} />
      
       
       </Route>
      <Route element={<Errors/>}/>
      <Route path="/login" element={ <AuthLogin> <Login /></AuthLogin> } />
      <Route path="*" element={<Errors />} />
      <Route path="/blank" element={<BlankPage />} />
    </Routes>
  )
}

export default Router