import axios from 'axios'
import { setHeaderToken } from '../config/verifyAuth';
import { authFirebase } from '../config/firebase';

export const StaAuth = 'staAuth'
export const SetUser = 'setUser'
export const Logout = 'logout'
export const RefreshToken = 'refreshToken'



export const refreshToken = () =>{
    return(dispatch) =>{
      dispatch({type:RefreshToken, isLoading : true , token : false})
      axios({ method : 'GET', url : 'refreshToken',timeout: 12000})
      .then(response =>{
          if(response.status === 200){
            console.log('test refresh token ',response.data.token)
            setHeaderToken(response.data.token) 
            dispatch({type:RefreshToken,isLoading : false ,token : response.data.token})
          }
        }).catch(err =>{
          dispatch({type:RefreshToken,isLoading : false ,token : err.message})
        })
      }
    }
    
    export const setGoogle = () =>{
      return(dispatch) =>{
        dispatch({type:StaAuth, data : false, token : false})
        authFirebase.onAuthStateChanged(async (user) =>{
          const fbToken = await user.getIdTokenResult()
          const data = {
            idToken : fbToken.token,
            name : user.displayName,
            email : user.email,
            emailVerified : user.emailVerified
          }
          axios({ method : 'POST', url : 'loginGoogle',timeout : 12000, data : data})
          .then(response =>{
            if(response.status === 200){
              localStorage.setItem('auth',true)
              setHeaderToken(response.data.token) 
                dispatch({type:StaAuth,data : false, token : response.data.token})
              }
              else if(response.status === 401){
                alert(response.data.message)
              }
          }).catch(err =>{
            console.log(err.message)
            dispatch({type:StaAuth,data : err.message, token : false})
          })
          
        })
        }
        
    }
    
    export const staAuth = (data) =>{
      return(dispatch) =>{
        dispatch({type:StaAuth,data : false, token : false})
        axios({ method : 'POST', url : 'login',timeout : 12000, data : data.formData})
        .then(response =>{
          
          if(response.status === 200){
            localStorage.setItem('auth',true)
            setHeaderToken(response.data.token) 
              dispatch({type:StaAuth,data : false, token : response.data.token})
            }
            else if(response.status === 401){
              alert(response.data.message)
            }
        }).catch(err =>{
          console.log(err.message)
          dispatch({type:StaAuth,data : err.message, token : false})
        })
    }
}

// export const StatusAuth = 'statusAuth'
export const setUser = () =>{
  return(dispatch) =>{
    dispatch({type:StaAuth,isLoading : true ,data : false})
    axios({ method : 'GET', url : 'user',timeout: 12000})
    .then(response =>{ 
      console.log('test token set User ',response.data)
      if(response.status === 200){
          dispatch({type:StaAuth,isLoading : false , data : response.data.data})
      }
    }).catch(err =>{
          dispatch({type:StaAuth,isLoading : false , data : err.message})
    })
  }
} 


export const logout = () =>{
  return(dispatch) =>{
    dispatch({type:Logout, isLoading : true })
    axios({ method : 'DELETE', url: 'logout',timeout: 12000})
    .then( res =>{
      dispatch({type:Logout, isLoading : false, data : null})
      
      console.log('logout berhasil')
    }).catch(err =>{
      console.log('logout gagal',err.message)
      dispatch({type:StaAuth,isLoading : false , data : err.message})
    })
  }
}