import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewBox } from "../Components";
import apiCall from "../conf/Apicall"

export default function DinnerSpecial(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        const loadData = async () => {
            const result = await apiCall("/meal-type/dinner")
            setData(result)
        }
        loadData()
    },[])
    
    return(
        <div className="vegBox">
            {
                data.map((item)=>(
                    <div key={item.id}>
                        <PreviewBox title={item.name} image={item.image} discription="dinner special"></PreviewBox>
                    </div>
                ))
            }
        </div>
    )
}