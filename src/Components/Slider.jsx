import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {getSliderData} from "../store/sliderSlice"
import { useDispatch, useSelector } from "react-redux";

export default function Slider(){
    const dispatch = useDispatch()
    const navigator = useNavigate()
    dispatch(getSliderData())
    const getTitle = useSelector((state) => (state.slider.currentTitle))
    const getSlogan = useSelector((state) => (state.slider.currentSlogan))
    const getImg = useSelector((state) => (state.slider.currentImg))

    const specialCall = () => {
        if(getTitle === "Dinner Specials"){
            navigator("/dinner-special")
        }
        if(getTitle === "Break Fast Specials"){
            navigator("/breakfastspecials")
        }
        if(getTitle === "Diet Specials"){
            navigator("/dietspecials")
        }
    }
    return(
        <div className="sliderCard">
            <img className="sliderImg" src={getImg}></img>
            <div className="sliderInfo">
                <h2 className="sliderTitle">{getTitle}</h2>
                <p className="sliderSlogan">{getSlogan}</p>
                <button className="sliderBtn" onClick={()=>specialCall()}>Check On</button>
            </div>
        </div>
    )
}