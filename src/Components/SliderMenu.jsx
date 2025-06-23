import React from "react";
import { useNavigate } from "react-router";
export default function SliderMenu(){
    const navigator = useNavigate()
    const navItems = [
        {
            name : "Home",
            slug : "/",
            img : "https://cdn-icons-png.flaticon.com/128/6349/6349354.png"
        },
        {
            name : "Veg",
            slug : "/veg",
            img : "https://cdn-icons-png.flaticon.com/128/6350/6350132.png"
        },
        {
            name : "Non Veg",
            slug : "/non-veg",
            img : "https://cdn-icons-png.flaticon.com/128/5069/5069019.png"
        },
        {
            name : "Fast Food",
            slug : "/fastfood",
            img : "https://cdn-icons-png.flaticon.com/128/5074/5074330.png"
        }
    ]
    return(
        <header id="headerId">
            <nav className="navSliderItems">
                <ul className="navSliderItemList">
                    {navItems.map((item)=>(
                        <li key={item.name} className="navSliderBox" onClick={()=>navigator(item.slug)}>
                            <img className="navSliderItemIcon" src={item.img}></img>
                            <b className="navSliderItemName">{item.name}</b>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}