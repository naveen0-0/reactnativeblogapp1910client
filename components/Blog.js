import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Blog = ({ blog }) => {
  return (
    <View style={styles.blogs}>
      <Text style={styles.title}> {blog.title} </Text>
      <Text style={styles.body}> {blog.body} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  blogs : {
    width:"95%",
    borderWidth:1,
    borderColor:"#000",
    borderRadius:5,
    marginVertical:10,
    padding: 10
  },
  title:{

  },
  body:{}
})


export default Blog