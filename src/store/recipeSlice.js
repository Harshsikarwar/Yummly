import {createSlice} from "@reduxjs/toolkit"
import React, { useEffect } from "react"


const initialState = {
    title : localStorage.getItem("title")
}

const recipeSlice = createSlice({
    name : "recipe",
    initialState,
    reducers : {
        pushRecipe : (state, actions) => {
            localStorage.setItem("title",actions.payload)
            state.title=localStorage.getItem("title")
        },
    }
})
export const {pushRecipe} = recipeSlice.actions
export default recipeSlice.reducer