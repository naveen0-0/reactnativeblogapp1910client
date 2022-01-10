import React,{ useContext } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../context/AuthContext'
import FlatButton from '../components/FlatButton';

const Profile = () => {

  const { authDispatch } = useContext(AuthContext)

  const Logout = () => {
    SecureStore.deleteItemAsync('blog_app_login_token_1910').then(() => {
      authDispatch({ type : "LOGOUT" })
    })
  }
  const LogoutTest = () => {
    console.log("test");
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.btn}>
        <FlatButton onPress={Logout}>Logout</FlatButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default Profile
