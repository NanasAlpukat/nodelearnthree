import React, { useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from '../stores/authStore';

const BlankPage = (props) => {

  const {auth } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const authRole = localStorage.getItem('auth') 
  const redirectPath = location.state?.path || '/'



  useEffect(() =>{
    if(authRole){
    dispatch(refreshToken())
    navigate(redirectPath,{replace:true})
  }
  },[authRole,auth,navigate,redirectPath,dispatch])




  return (
    <div></div>
  )
}

export default BlankPage;
