import React from 'react'
import Header from './Components/Header' 
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Slide from './Components/Slide'
import Card from './Components/Card'
import Login from './Pages/Login'


function App() {
  return (
    <div>
      <Header/>
      <Slide/>
      <Contact/>
      <Home/>
      <Card/>
      <Login/>
    </div>
  )
}

export default App
