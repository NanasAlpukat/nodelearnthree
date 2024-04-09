
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../stores/authStore';
// import axios from 'axios';
// import { useEffect } from 'react';

const ChekckStorage = ({children}) => {

  const authRole = localStorage.getItem('auth') 
  const dispatch = useDispatch();
  const {auth, token } = useSelector((state) => state.Auth);
  
  // const factData = async() =>{
  //   const resData = await axios.get('auth/google/callback')
    
  //   console.log(resData)
  // }

  useEffect(() =>{
    // factData()
    // console.log('check store',decodeURI(window.location.token))
//     const tokenTest =  window.location.search
//   const pecah = tokenTest.split('=')
//  console.log('token',pecah[1])

    if(authRole && token){
      dispatch(setUser())
      console.log(auth)
  }
  },[authRole,auth,token,dispatch])

  return children
    
}

export default ChekckStorage;