import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { Home, Restaurant } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/restaurant' element={<Restaurant/>}/>
      </Routes>
    </>
  )
}

export default App
