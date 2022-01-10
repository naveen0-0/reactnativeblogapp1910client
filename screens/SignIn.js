import React, { useState, useContext } from 'react'
import { StyleSheet ,View, Text , ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { Formik } from 'formik'
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store';
import { serverUrl } from '../constants/constants'

const SignIn = ({ navigation }) => {
  const { authDispatch } = useContext(AuthContext)
  const [ submitActive, setSubmitActive ] = useState(false)
  const [ feedback, setFeedBack ] = useState("")

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  const SignInSubmit = values => {
    setSubmitActive(true)
    try {
      fetch(`${serverUrl}/auth/login`,{ method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify(values) })
      .then(res => res.json())
      .then(data => {
        if(data.operation){
          save('blog_app_login_token_1910',data.token).then(() => {
            authDispatch({ type: "LOGIN", payload : { username: data.username, email : data.email, loggedIn:data.loggedIn }})
          })
        }else{
          setFeedBack(data.feedback)
          setSubmitActive(false)
        }
      })
    } 
    catch (errors) {
      setSubmitActive(false)
      console.log(errors)
    } 
  }

  const userSchema = yup.object({
    username : yup.string().min(6).required(),
    password : yup.string().min(6).required(),
  })


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ display:"flex", flexDirection:"column",justifyContent:"center",minHeight:"100%" }}>
      <KeyboardAvoidingView behavior="height">
          <View>
            <Text style={styles.text}>LogIn</Text>
          </View>

        <View>
          <Text style={styles.feedback}>{feedback}</Text>
        </View>

          <Formik
        initialValues={{ username : "", password:"" }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          SignInSubmit(values)
        }}
      >
        {(props) =>(
          <View>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder='Enter your username'
                value={props.values.username}
                onChangeText={props.handleChange('username')}
                style={styles.input}
                placeholderTextColor="grey"
                onBlur={props.handleBlur('username')}
              />
            </View>

            <View style={styles.errorTextContainer}><Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text></View>

            <View style={styles.inputContainer}>
              <TextInput 
                placeholder='Enter your Password'
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                style={styles.input}
                placeholderTextColor="grey"
                onBlur={props.handleBlur('password')}
              />
            </View>

            <View style={styles.errorTextContainer}><Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text></View>

            <View style={styles.signinthencontainer}>
              <Text style={styles.signinthen1}>Don't have an account? <Text onPress={() => navigation.goBack()} style={styles.signinthen2}>Sign Up</Text></Text> 
            </View>

          <View style={styles.submitcontainer}>
            <TouchableOpacity onPress={props.handleSubmit} style={styles.submit} disabled={submitActive}>
              {submitActive? 
                <ActivityIndicator size="small" color="crimson"/> : <Text style={styles.submittext}>Sign In</Text>
              }
            </TouchableOpacity>
          </View>

          </View>          
        )}
      </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:"#191720"
  },
  text:{
    color: "#ccd",
    fontSize:30,
    marginVertical:20,
    textAlign:"center"
  },
  feedback:{
    color: "#ccd",
    fontSize:20,
    marginVertical:10,
    textAlign:"center"
  },
  inputContainer:{
    marginVertical:10,
    display: 'flex',
    justifyContent:"center",
    alignItems:"center"
  },
  input:{
    borderWidth:1,
    borderColor:"#555",
    width:"90%",
    padding: 10,
    color: "grey",
    borderRadius:5
  },
  submitcontainer:{
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10
  },
  submit:{
    borderWidth:1,
    borderColor:"grey",
    width: "90%",
    borderRadius:100,
    paddingVertical:10
  },
  submittext:{
    textAlign:"center",
    fontSize:18,
    paddingHorizontal:5,
    paddingVertical:7,
    color: "cornflowerblue",
    fontFamily:"monospace"
  },
  signinthencontainer:{
    marginTop:20
  },
  signinthen1:{
    color: "grey",
    textAlign:"center"
  },
  signinthen2:{
    color: "grey",
    textAlign:"center",
    color: "cornflowerblue",
  },
  errorText:{
    textAlign:"center",
    color: "crimson",
    fontSize:18
  }
})

export default SignIn
