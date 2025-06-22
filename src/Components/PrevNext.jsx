import React from "react";
import { nextData, prevData, getSliderData } from "../store/sliderSlice";
import { useDispatch } from "react-redux";
export default function NextPrev(){
    const dispatch = useDispatch()
    const next = () => {
        dispatch(nextData())
        dispatch(getSliderData())
    }
    const prev = () => {
        dispatch(prevData())
        dispatch(getSliderData())
    }
    return(
        <div className="prevnextBox">
            <div className="prevBox">
                <img onClick={()=>prev()} src="https://cdn-icons-png.flaticon.com/128/17779/17779816.png" className="prevButton"></img>
            </div>
            <div className="nextBox">
                <img onClick={()=>next()} src="https://cdn-icons-png.flaticon.com/128/17779/17779819.png" className="nextButton"></img>
            </div>
        </div>
    )
}