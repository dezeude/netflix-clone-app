// import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Browse from './Browse.js'
import Login from "./Login.js"
import './styles.css'
import { PopupContextProvider } from "./Contexts"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <PopupContextProvider.Provider>
          <Route path="/" element={<Login/>}/>
          <Route path="/browse" element={<Browse/>}/>
        </PopupContextProvider.Provider>
      </Routes>
    </BrowserRouter>
    
  )
}


