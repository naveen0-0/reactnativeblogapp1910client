import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

const FlatButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.btntext}>{children}</Text> 
        <Ionicons size={24} name='log-out'color="#ddd"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  btn : {
    backgroundColor:"crimson",
    borderRadius:5,
    padding: 10,
    display: 'flex',
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  btntext:{
    color: "#ccc",
    textAlign:"center",
    fontSize:20,
    paddingRight:10,
    fontWeight:"700"
  }
})

export default FlatButton
