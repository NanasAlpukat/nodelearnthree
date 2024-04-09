
// import { useEffect } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { staAuth } from '../stores/authStore';
// import { useRecoilValue } from 'recoil';
// import { Auth } from '../utility/recoil';

const AuthCheck = ({children}) => {
// const AuthCheck = (props) => {
    const location = useLocation();
    // const navigate = useNavigate()

    const {auth} = useSelector((state) => state.Auth);
    // const {check} = useRecoilValue(Auth)
    if(!auth){
        console.log(auth)
        
        return <Navigate to='/login' state={{path : location.pathname}} />
    }
    return children
    
//     useEffect(() =>{
//         if(!auth){
//             // return navigate("/blank", {relative:true});
//             return navigate("/login");
//         }
//         // else if(!auth){
//         //     return navigate("/login", {relative:true});
//         // }
//     },[auth,navigate])
//    return props.children
}

export default AuthCheck;