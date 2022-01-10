import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { Ionicons } from "@expo/vector-icons";

const Stack = createBottomTabNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      tabBarStyle:{ backgroundColor:"#111" },
      header:() => null
    }}>
      <Stack.Screen name='Home' component={Home} options={{
        tabBarIcon:(tabInfo) => <Ionicons name="md-home" size={24} color={tabInfo.focused ? "crimson" : "#8e8e93"} />,
        tabBarLabel:() => null
      }}/>

      <Stack.Screen name='Profile' component={Profile} options={{
        tabBarIcon:(tabInfo) => <Ionicons name="md-person-circle-outline" size={24} color={tabInfo.focused ? "crimson" : "#8e8e93"} />,
        tabBarLabel:() => null
      }}/>
    </Stack.Navigator>
  )
}

export default AppStack
