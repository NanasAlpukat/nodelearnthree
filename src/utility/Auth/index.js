import { Logout, RefreshToken, SetUser, StaAuth } from "../../stores/authStore";

const initialState = {
    auth : false,
    user : null,
    isLoading: false,
    token : null,
}

const Auth = ( state = initialState, action) =>{
        switch(action.type){
          case StaAuth :
             return {
             ...state,
             auth: true,
             user : action.data,
             token : action.token
            }
          case RefreshToken :
            return {
            ...state,
            auth : true,
            isLoading : action.isLoading,
            token : action.token
            }
          case SetUser :
            return {
            auth : true,
            isLoading : action.isLoading,
            user : action.data
            }
          case Logout :
            return {
            auth : false,
            isLoading : action.isLoading,
            user : action.data
            }
            default : return state
        }

}

export default Auth;

