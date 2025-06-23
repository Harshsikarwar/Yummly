import { useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import {Header, Footer, SliderMenu, Refresher} from './Components/index'
import {Outlet} from "react-router-dom"

function App() {
  const dispatch = useDispatch()
  //const search = dispatch(getVeg())
  return (
    <>
      <Header/>
      <SliderMenu/>
      <Refresher/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
