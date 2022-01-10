import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BLOGREAL</Text>
      <ActivityIndicator color="crimson" size={40}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#080808",
    height: "100%",
    width: "100%",
  },
  text:{
    fontSize:40,
    color: "#ccd",
    marginVertical:10,
    fontWeight:"700",
    letterSpacing:1.5
  }
})
