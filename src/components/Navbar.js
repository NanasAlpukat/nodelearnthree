import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { authFirebase } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../stores/authStore';

const Navbar = () => {
const dispatch = useDispatch();
const navigate = useNavigate()
  
const setLogout = () =>{
    signOut(authFirebase).then((res) =>{
    dispatch(logout())
    localStorage.removeItem('auth')
    console.log('logout berhasil')
    navigate('/login')
    }).catch((err) =>{
      console.log(err)
    })
    
}

  return (
    <div>
   <nav className='flex items-center px-3 py-4 gap-3 bg-sky-600'>
    <div className='text-lg text-white'>CURVA</div>
    <div className='flex justify-between w-full'>
      <ul className='flex  justify-evenly text-white gap-3'>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'font-semibold text-white' : 'font-normal')}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'font-semibold text-white' : 'font-normal')}>About</NavLink></li>
      </ul>
      <div className='w-1/4 text-right'>
        {/* <NavLink to='/login' className='mr-10 text-white cursor-pointer'>Logout</NavLink> */}
        <button to='/login' className='mr-10 text-white ' onClick={setLogout}>Logout</button>
      </div>
    </div>
   </nav>
   <div>
    <Outlet/>
   </div>
    </div> 
   )
}

export default Navbar;