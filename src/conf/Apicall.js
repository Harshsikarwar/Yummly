import React from "react"
import recipeApi from "./conf"


export default async function apiCall(search){
    try{
        let response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?"+search+"&apiKey=c9c1eaad2e1842808610ed26299d6eda")
        console.log(recipeApi.api)
        if(!response){
            console.log("recipeSlice :: error :: "+response.status)
        }
        else{
            let data = response.json()
            return data
        }
    }catch(error){
        console.log("recipeSlice :: error :: "+error)
    }
}