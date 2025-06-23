import React, { useState } from "react";
import { useNavigate } from "react-router";
import {Logo} from "../index"

export default function Header(){
    const navigator = useNavigate()
    const [display, setDisplay] = useState('none')
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

    const sliderMenu = ()=>{
        const headerID = document.getElementById("headerId")
        if(display === 'none'){
            headerID.style.display = 'flex'
            setDisplay('flex')
        }
        else{
            headerID.style.display = 'none'
            setDisplay('none')
        }
    }
    return(
        <header>
            <Logo/>
            <nav className="navItems">
                <ul className="navItemList" id="navItemListHeader">
                    {navItems.map((item)=>(
                        <li key={item.name} id="navBox" className="navBox" onClick={()=>navigator(item.slug)}>
                            <img className="navItemIcon" src={item.img}></img>
                            <b className="navItemName">{item.name}</b>
                        </li>
                    ))}
                    <li id="menuBox" className="navBox" onClick={()=>sliderMenu()}>
                        <img id="menuBurger" className="navItemIcon" src="https://cdn-icons-png.flaticon.com/128/2187/2187435.png"></img>
                    </li>
                </ul>
            </nav>
        </header>
    )
}