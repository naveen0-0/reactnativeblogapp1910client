import React,{ useEffect } from 'react'
import { View, Text } from 'react-native'

export default function BlogDetails({ route, navigation }) {
  const { blog } = route.params

  return (
    <View>
      <Text>BlogDetails</Text>
      <Text>{blog.title}</Text>
      <Text>{blog.body}</Text>
    </View>
  )
}
