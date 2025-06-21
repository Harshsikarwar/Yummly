import {createSlice} from "@reduxjs/toolkit"
import React from "react"
import apiCall from "../conf/Apicall"

const initialState = {
    data : "",
    url : "https://"+"c9c1eaad2e1842808610ed26299d6eda"+".spoonacular.com/recipes/",
}

const recipeSlice = createSlice({
    name : "recipe",
    initialState,
    reducers : {
        getNonveg : (state, actions) => {
            state.data = apiCall("ingredients=chicken")
            console.log("data : ",state.data)
        },
        getVeg : (state, actions) => {
            state.data = apiCall("ingredients=tomato,potato,onion,spinach,cheese,peas")
            console.log("data : ",state.data)
        }
    }
})
export const {getNonveg, getVeg} = recipeSlice.actions
export default recipeSlice.reducer