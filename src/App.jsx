import React from 'react'
import Header from './Components/Header' 
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Slide from './Components/Slide'
import Card from './Components/Card'


function App() {
  return (
    <div>
      <Header/>
      <Slide/>
      <Contact/>
      <Home/>
      <Card/>
    </div>
  )
}

export default App
