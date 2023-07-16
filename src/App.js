import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Browse from './Browse.js'
import Login from "./Login.js"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}


