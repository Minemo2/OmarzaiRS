import React from 'react'
import Top from './components/Top'
import Navigation from './components/Navigation'
import './App.css'
import MainImage from './components/MainImage'
import HomeOverOns from "./components/HomeOverOns"
import HomeOnzePakketten from './components/HomeOnzePakketten'
import HomeWarrom from './components/HomeWarrom'
import Footer from './components/Footer'

function App() {
  
  
  return (
    <div>
      <Top />
      
      <Navigation />
      <MainImage />
      <HomeOverOns />
      <HomeOnzePakketten />
      <HomeWarrom />
      <Footer />
        
    </div>
  )
}

export default App
