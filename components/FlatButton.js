import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

const FlatButton = ({ onPress }) => {
  return (
    <View style={styles.btncontainer}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Ionicons size={24} name='log-out'color="#ddd"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  btncontainer:{
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  
  btn : {
    backgroundColor:"crimson",
    borderRadius:5,
    padding: 10,
    marginHorizontal:5,
    marginVertical:5,
    
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    width: "90%"

  }
})

export default FlatButton
