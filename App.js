import 'react-native-gesture-handler';
import Routes from './components/Routes';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';


export default function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <Routes/>
      </BlogContextProvider>
    </AuthContextProvider>
  )
}
