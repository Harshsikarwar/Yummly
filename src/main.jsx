import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import React from 'react'
import Veg from './Pages/Veg.jsx'
import NonVeg from './Pages/NonVeg.jsx'
import FastFood from "./Pages/FastFood.jsx"
import Recipe from "./Pages/Recipe.jsx"
import DinnerSpecial from "./Pages/DinnerSpecial.jsx"
import BreakFast from "./Pages/BreakFast.jsx"
import DietSpecial from "./Pages/DietSpecial.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/veg",
        element:<Veg/>
      },
      {
        path:"/non-veg",
        element:<NonVeg/>
      },
      {
        path:"/fastfood",
        element:<FastFood/>
      },
      {
        path:"/recipe",
        element:<Recipe/>
      },
      {
        path:"/dinner-special",
        element:<DinnerSpecial/>
      },
      {
        path:"/breakfastspecials",
        element:<BreakFast/>
      },
      {
        path:"/dietspecials",
        element:<DietSpecial/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
