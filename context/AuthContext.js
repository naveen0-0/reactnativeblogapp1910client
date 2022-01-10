import { createContext, useReducer } from 'react'
import * as SecureStore from 'expo-secure-store';
import { serverUrl } from '../constants/constants'

export const AuthContext = createContext();

const initialState = {
  username:"",
  email:"",
  loggedIn:false
}

const reducer = (state, action) => {
  switch(action.type){

    case "LOGIN":
      return action.payload

    case "LOGOUT":
      return {
        username : "",
        email:"",
        loggedIn:false
      }
    
    default:
      return state
  }
}

export default function AuthContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const getUser = async (setLoading) => {
    SecureStore.getItemAsync('blog_app_login_token_1910').then((token) => {
      fetch(`${serverUrl}/auth/getuser`, { headers :{ "Authorization" : token }})
        .then(res => res.json())
        .then(data => {
          if(data.operation){
            dispatch({ type : "LOGIN", payload : {  username:data.username, email:data.email, loggedIn:data.loggedIn }})
          }
          setLoading(false)
        })
    })
  }

  return (
    <AuthContext.Provider value={{ user : state, authDispatch:dispatch, getUser }}>
      {children}
    </AuthContext.Provider>
  )
}
