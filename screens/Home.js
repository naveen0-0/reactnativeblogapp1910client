import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllBlogsScreen from './AllBlogsScreen';
import BlogDetails from './BlogDetails';
import NewBlogScreen from './NewBlogScreen';

const Stack = createNativeStackNavigator()

const Home = () => {

  
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Blogs" component={AllBlogsScreen}/>
      <Stack.Screen name="BlogDetail" component={BlogDetails}/>
      <Stack.Screen name="NewBlog" component={NewBlogScreen}/>
    </Stack.Navigator>
  )
}

export default Home
