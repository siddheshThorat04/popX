import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./pages/Login.jsx"
import Signup from './pages/Signup.jsx'
import { Routes , Route } from 'react-router-dom'
import { useAuthContext } from './context/authContext.jsx'
function App() {
  const {authUser}=useAuthContext()
  useEffect(() => {
  
      // console.log(authUser)
  }, [])
  
  return (
    <>
        <Routes>
          <Route   path='/'  element={authUser?<>heyy</>:<Signup/>}  />
          <Route   path='/login'  element={<Login/>}  />
        </Routes>
    </>
  )
}

export default App
