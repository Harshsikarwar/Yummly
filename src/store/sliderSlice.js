import { createSlice, current } from "@reduxjs/toolkit";
import { data } from "react-router";

const initialState = {
    data : [
        {
            id : 1,
            img : "https://i.pinimg.com/1200x/fc/7e/d0/fc7ed0a50c9f0f5e91217a7169975296.jpg",
            title : "Dinner Specials",
            slogan : "Expreince new flavours",
            status : "active"
        },
        {
            id : 2,
            img : "https://i.pinimg.com/1200x/9d/cb/97/9dcb976cae79e5ba226a70875f584f68.jpg",
            title : "Break Fast Specials",
            slogan : "Expreince new flavours",
            status : "unactive"
        },
        {
            id : 3,
            img : "https://i.pinimg.com/1200x/3a/48/19/3a48194d0f942c007d7332ae681f8b63.jpg",
            title : "Diet Specials",
            slogan : "Expreince new flavours",
            status : "unactive"
        }
    ],

    current:1,
    currentTitle:"",
    currentSlogan:"",
    currentImg:""
}

const sliderSlice = createSlice({
    name : "slider",
    initialState,
    reducers : {
        getSliderData : (state, actions) => {
            const items = state.data.find((item)=>item.id === state.current)
            state.currentTitle = items.title
            state.currentSlogan = items.slogan
            state.currentImg = items.img
        },
        nextData : (state, actions) => {
            if(state.current < 3){
                state.current+=1
            }
            console.log(state.current)
        },
        prevData : (state, actions) => {
            if(state.current > 1){
                state.current-=1
            }
            console.log(state.current)
        }
    }
})

export const {getSliderData, nextData, prevData} = sliderSlice.actions
export default sliderSlice.reducer