import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice"
import sliderSlice from "./sliderSlice"

const store = configureStore({
    reducer : {
        recipe : recipeSlice,
        slider : sliderSlice
    }
})

export default store