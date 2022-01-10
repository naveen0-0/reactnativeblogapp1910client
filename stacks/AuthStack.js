import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header : () => null }}>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
    </Stack.Navigator>
  )
}

export default AuthStack
