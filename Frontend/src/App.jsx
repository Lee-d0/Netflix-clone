import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/homepages/HomePage.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import SignUpPage from "./Pages/SignUpPage.jsx"
import Footer from "./componets/Footer.jsx"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authUser.js"
import { useEffect } from "react"



function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("auth user is here:", user)



  useEffect(() => {
    authCheck();
  }, [])

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
    </Routes>
    <Footer />

    <Toaster/>
    
    </>
  )
}

export default App
