import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { BlogContext } from '../context/BlogContext'
import Blog from '../components/Blog'

export default function AllBlogsScreen({ navigation }) {
  const [ loading, setLoading ] = useState(true)

  const { getAllBlogs, blog } = useContext(BlogContext)

  useEffect(() => {
    getAllBlogs(setLoading)
  },[])

  const navigateToBlogDetails = (item) => navigation.navigate('BlogDetail',{ blog : item })

  const renderItem = ({ item }) => <Blog blog={item} onPress={() => navigateToBlogDetails(item)}/>

  if(loading) return <View style={styles.loadingContainer}>
    <ActivityIndicator size={50} color="crimson" />
  </View>

  return (
      <View style={styles.main}>

        <View>
          <Text style={styles.title}>Blogs</Text>
        </View>

        <View style={styles.flatlistcontainer}>
          <FlatList
            data={blog.allBlogs}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        </View>

        <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('NewBlog')}>
          <Ionicons name='add' size={26} color="#fff"/>
        </TouchableOpacity>

        
      </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer:{
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    height: "100%"
  },
  add:{
    backgroundColor:"crimson",
    width: 60,
    height: 60,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:9999999,
    elevation:20,
    position: 'absolute',
    right: 15,
    bottom: 75
  },
  title:{
    textAlign:"center",
    fontSize:24,
    backgroundColor:"#111",
    color: "#eee",
    paddingVertical:10,
  },
})