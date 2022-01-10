import { createContext, useReducer } from 'react'
import { serverUrl } from '../constants/constants'

export const BlogContext = createContext()

let initialValue = {
  allBlogs: [],
  selectedBlog: {},
  editingBlog: {}
}

const reducer = (state, action) => {
  switch(action.type){

    case "ADD_BLOG":
      return {
        ...state,
        allBlogs:[...state.allBlogs, action.payload]
      }

    case "UPDATE_BLOGS":
      return {
        ...state,
        allBlogs:action.payload
      }
    
    default:
      return state
  }
}


export default function BlogContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(reducer,initialValue)

  const getAllBlogs = async (setLoading) => {
    fetch(`${serverUrl}/api/allblogs`)
    .then(res => res.json())
    .then(data => {
      if(data.operation){
        dispatch({ type : "UPDATE_BLOGS", payload : data.blogs})
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }
  
  return (
    <BlogContext.Provider value={{ blog:state, blogDispatch : dispatch, getAllBlogs }}>
      {children}
    </BlogContext.Provider>
  )
}
