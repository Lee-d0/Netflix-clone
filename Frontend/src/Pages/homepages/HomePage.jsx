import { useAuthStore } from "../../store/authUser.js"
import AuthScreen from "./authScreen.jsx"
import HomeScreen from "./HomeScreen.jsx"



const HomePage = () => {
const { user } = useAuthStore()
  return ( <>{user ? <HomeScreen /> : <AuthScreen /> }</>
    
  )
}

export default HomePage