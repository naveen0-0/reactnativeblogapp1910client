import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Blog = ({ blog, onPress }) => {
  return (
    <TouchableOpacity style={styles.blogs} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}> {blog.title} </Text>
      <Text style={styles.body} numberOfLines={2}> {blog.body} </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  blogs : {
    marginHorizontal:10,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:5,
    marginVertical:10,
    padding: 10,
  },
  title:{
    fontWeight:"700",
    fontSize:20
  },
  body:{}
})


export default Blog