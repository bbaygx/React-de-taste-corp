import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { Home, Restaurant } from './pages'
import { Footer } from './components'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/restaurant' element={<Restaurant/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
