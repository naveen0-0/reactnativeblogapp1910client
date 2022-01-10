import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, ActivityIndicator } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { Formik } from 'formik'
import * as yup from 'yup';
import { BlogContext } from '../context/BlogContext'
import { serverUrl } from '../constants/constants'

export default function NewBlogScreen({ navigation }) {
  const [ submitActive, setSubmitActive ] = useState(false)
  const { blogDispatch } = useContext(BlogContext)

  const AddBlog = values => {
    setSubmitActive(true)
    try {
      fetch(`${serverUrl}/api/newblog`,{ method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify(values) })
      .then(res => res.json())
      .then(data => {
        if(data.operation){
          blogDispatch({ type : "ADD_BLOG", payload : data.blog })
          navigation.goBack()
        }else{
          setSubmitActive(false)
        }
      })
    } 
    catch (errors) {
      setSubmitActive(false)
      console.log(errors)
    } 
  }


  const blogSchema = yup.object({
    title : yup.string().min(6).required(),
    body : yup.string().min(10).required(),
  })

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons size={26} name="arrow-back" color="#fff"/>
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.titletext}>Add a blog</Text>
        </View>

      </View>

      <ScrollView style={styles.content}>
        <KeyboardAvoidingView behavior='height'>
          
          <Formik
            initialValues={{ title : "", body : "" }}
            validationSchema={blogSchema}
            onSubmit={(values) => {
              AddBlog(values)
            }}
          >
            {(props) =>(
              <View>
                <View style={styles.inputContainer}>
                  <TextInput 
                    placeholder='Enter the title...'
                    value={props.values.title}
                    onChangeText={props.handleChange('title')}
                    style={styles.input}
                    placeholderTextColor="#ddd"
                    onBlur={props.handleBlur('title')}
                  />
                </View>

                <View style={styles.errorTextContainer}><Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text></View>

                <View style={styles.inputContainer}>
                  <TextInput 
                    placeholder='Enter the body...'
                    value={props.values.body}
                    onChangeText={props.handleChange('body')}
                    style={styles.input}
                    placeholderTextColor="#ddd"
                    onBlur={props.handleBlur('body')}
                    multiline
                    />
                </View>

                <View style={styles.errorTextContainer}><Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text></View>

              <View style={styles.submitcontainer}>
                <TouchableOpacity onPress={props.handleSubmit} style={styles.submit} disabled={submitActive}>
                  {submitActive? 
                    <ActivityIndicator size="small" color="crimson"/> : <Text style={styles.submittext}>Create Blog</Text>
                  }
                </TouchableOpacity>
              </View>

              </View>          
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    minHeight:"100%",
    backgroundColor:"#333",
  },
  
  header:{
    backgroundColor:"#111",
    padding:10,
    position: "relative"
  },

  back:{
    paddingLeft: 10,
    position: 'absolute',
    top:"50%",
    left: 10,
    zIndex:1
  },
  titletext : {
    textAlign:"center",
    fontSize:22,
    color:"#fff"
  },

  content : {

    marginTop:20
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
    color: "#ddd",
    borderRadius:5
  },
  submitcontainer:{
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10,
    marginBottom:100
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
  errorText:{
    textAlign:"center",
    color: "crimson",
    fontSize:18
  }

})
