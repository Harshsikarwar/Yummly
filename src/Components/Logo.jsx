import React from "react";

export default function Logo({id=""}){
    return(
        <div id={id} className="headerLogo">
            <img src="https://cdn-icons-png.flaticon.com/128/433/433087.png" className="logo"></img>
            <h2 className="title">Yummly</h2>
        </div>
    )
}