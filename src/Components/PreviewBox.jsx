import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {useDispatch} from "react-redux"
import {pushRecipe} from "../store/recipeSlice"

export default function PreviewBox({
    image="https://i.pinimg.com/1200x/c5/af/1d/c5af1d0cf7cbfb05fd7dc045855323bb.jpg",
    title="Biryani",
    discription="non veg"}
){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showRecipe = (title)=>{
        dispatch(pushRecipe(title))
        navigate("/recipe")
    }
    return(
        <div className="previewBox">
            <img id="previewImg" className="featuredImg" src={image} alt="dynamic"></img>
            <div className="previewInfo">
                <h3 className="previewTitle">{title}</h3>
                <p className="previewDiscrpt">{discription}</p>
                <img onClick={()=>showRecipe(title)} src="https://cdn-icons-png.flaticon.com/128/17588/17588752.png" className="seeBtn"></img>
            </div>
        </div>
    )
}