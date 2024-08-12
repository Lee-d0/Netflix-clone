import AuthScreen from "./authScreen.jsx"
import HomeScreen from "./HomeScreen.jsx"



const HomePage = () => {
  const user = false
  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen /> }
    </div>
  )
}

export default HomePage