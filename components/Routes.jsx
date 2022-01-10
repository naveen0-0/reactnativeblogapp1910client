import React, { useState, useEffect, useContext } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
import * as SecureStore from 'expo-secure-store';

import AuthStack from '../stacks/AuthStack'
import AppStack from '../stacks/AppStack'
import SplashScreen from '../screens/SplashScreen'

const Routes = () => {
  const [ loading, setLoading ] = useState(true)
  const { user, authDispatch, getUser } = useContext(AuthContext)

  
  useEffect(() => {
    getUser(setLoading)
  },[])

  if(loading) return <SplashScreen/>

  return (
    <NavigationContainer>
      <StatusBar barStyle='default'/>
      { user.loggedIn ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default Routes
