import { useEffect } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
// import { Navigate, useLocation, useNavigate} from 'react-router-dom';
import { refreshToken } from '../stores/authStore';
import { useDispatch } from 'react-redux';

const AuthLogin = ({children}) =>{
  // const {auth } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const location = useLocation()
  const authRole = localStorage.getItem('auth') 
  const redirectPath = location.state?.path || '/'


  useEffect(() =>{
    if(authRole){
    dispatch(refreshToken())
    // navigate(redirectPath)
  }
  console.log('maaf tidak ada token')
  },[authRole,dispatch])
  // useEffect(() =>{
  //   if(authRole){
  //   dispatch(refreshToken())
  //   // navigate(redirectPath)
  //   navigate(redirectPath)
  // }
  // },[authRole,navigate,redirectPath,dispatch])


  if(authRole){
    // console.log(auth)
    
    // return <Navigate to='/' state={{path : location.pathname}} />
    return <Navigate to={redirectPath} state={{path : location.pathname}} />
}
return children

  // return props.children
}

export default AuthLogin;