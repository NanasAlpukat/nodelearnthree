import React, {  useState } from 'react';
// import React, { useEffect, useState } from 'react';
// import { useNavigate,useLocation } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { refreshToken, staAuth } from '../stores/authStore';
import {  setGoogle, staAuth } from '../stores/authStore';
import {  withGoogle } from '../config/firebase';

const Login = (props) => {
  const [formData,setFormData] = useState({
    password:'',
    email:'',
  })
  
  const {auth } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const location = useLocation()
  // const authRole = localStorage.getItem('auth') 
  // const redirectPath = location.state?.path || '/'



  // useEffect(() =>{
  //   if(authRole){
  //   dispatch(refreshToken())
  //   // navigate(redirectPath)
  //   navigate(redirectPath, {replace:true})
  // }
  // },[authRole,auth,navigate,redirectPath,dispatch])
//  console.log('check store',props)
// const tokenTest =  window.location.search
// const pecah = tokenTest.split('=')
//  console.log('token',pecah[1])

//  useEffect(() =>{
//   if(pecah[1]){
//     dispatch(setGoogle(pecah[1]))
//     navigate('/', {replace: true})
//   }
//   console.log('data tidak ada')
//  },[dispatch,pecah,navigate])
  const logGoogle = async() =>{
    const res = await withGoogle();
    const data = {
      idToken : res._tokenResponse.idToken,
      name : res._tokenResponse.displayName,
      email : res._tokenResponse.email,
      emailVerified : res._tokenResponse.emailVerified
    }
    // console.log(res)
    console.log(data)
    dispatch(setGoogle())
    if(!auth){
      console.log('Auth gagal')
    }
    navigate('/', {replace: true})
    // authFirebase.onAuthStateChanged(async (user) =>{

    //   const tokenGoogle = await user.getIdTokenResult()
    //   console.log(tokenGoogle.token)
    //   // user.getIdToken().then((token) =>{
    //   //       console.log(token)
    //   // });
    // })
  }



  

  const setLogin = (e) =>{
    e.preventDefault();
    dispatch(staAuth({formData}))
    if(!auth){
      console.log('Auth gagal')
    }
    navigate('/', {replace: true})
    // navigate(redirectPath, {replace: true})
  }



  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form onSubmit={(e) => setLogin(e)}>
        <div className="flex justify-center mt-12 w-96 ">
          <div className="bg-sky-600 w-full p-6 rounded shadow-md">
            <div className="text-xl uppercase font-semibold text-center text-white">Login</div>
            <div className=" mt-6 mb-3 flex flex-col ">
              <label htmlFor="email" className="mb-2 text-white">
                Email
              </label>
              <input type="email" name="email" id="email" className="rounded p-1" value={formData.email} onChange={(e) => setFormData({...formData,[e.target.name] : e.target.value})}/>
            </div>
            <div className="mb-7 flex flex-col">
              <label htmlFor="password" className="mb-2 text-white">
                Password
              </label>
              <input type="password" name="password" id="password" className="rounded p-1" value={formData.password} onChange={(e) => setFormData({...formData,[e.target.name] : e.target.value})} />
            </div>
            <div className="flex gap-1 justify-center">
            <button  className='bg-white p-2 rounded shadow  text-sky-500 hover:bg-sky-200 '>Submit</button></div>
              {/* <button className="bg-white p-2 rounded shadow  text-sky-500 hover:bg-sky-200 hover:text-white ">Submit</button> */}
          </div>
        </div>
      </form>
            <div className='flex py-2 justify-center'><button onClick={logGoogle} className='bg-white p-2 rounded shadow  text-sky-500 hover:bg-sky-200'>Google ?</button></div>
            {/* <div className='flex py-2 justify-center'><NavLink to='http://localhost:5000/users/auth/google' className='bg-white p-2 rounded shadow  text-sky-500 hover:bg-sky-200'>Google ?</NavLink></div> */}
    </div>
  )
}

export default Login;
