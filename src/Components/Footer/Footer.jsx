import React from "react";
import { useNavigate } from "react-router";

export default function Footer(){
    const navigate = useNavigate()
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
        <footer>
            <div className="headerLogo">
                <img src="https://cdn-icons-png.flaticon.com/128/433/433087.png" className="logo"></img>
                <h2 className="title">Yummly</h2>
            </div>
            <nav className="navItems">
                <ul className="navItemList">
                    {navItems.map((item)=>(
                        <li key={item.name} className="navBox" onClick={()=>navigate(item.slug)}>
                            <img className="navItemIcon" src={item.img}></img>
                            <b className="navItemName">{item.name}</b>
                        </li>
                    ))}
                </ul>
                <ul className="navItemList">
                    <li className="navBox">
                        <img className="navItemIcon" src="https://cdn-icons-png.flaticon.com/128/18997/18997014.png"></img>
                        <b className="navItemName">Privacy Policy</b>
                    </li>
                    <li className="navBox">
                        <img className="navItemIcon" src="https://cdn-icons-png.flaticon.com/128/17818/17818058.png"></img>
                        <b className="navItemName">Terms & Conditions</b>
                    </li>
                    <li className="navBox">
                        <img className="navItemIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917700.png"></img>
                        <b className="navItemName">Copyright</b>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}