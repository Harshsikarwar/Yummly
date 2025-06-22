import { useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import {Header, Footer} from './Components/index'
import {Outlet} from "react-router-dom"

function App() {
  const dispatch = useDispatch()
  //const search = dispatch(getVeg())
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
