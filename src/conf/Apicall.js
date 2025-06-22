import React from "react"


export default async function apiCall(search){
    try{
        let response = await fetch("https://dummyjson.com/recipes"+search)
        
        if(!response){
            console.log("recipeSlice :: error :: "+response.status)
        }
        else{
            let data = await response.json()
            return data.recipes
        }
    }catch(error){
        console.log("recipeSlice :: error :: "+error)
    }
}