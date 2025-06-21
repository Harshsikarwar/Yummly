import { useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import { getNonveg, getVeg } from './store/recipeSlice'

function App() {
  const dispatch = useDispatch()
  const search = dispatch(getVeg())
  return (
    <>
      <div>Running...</div>
    </>
  )
}

export default App
