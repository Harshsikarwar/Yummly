import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewBox } from "../Components";
import apiCall from "../conf/Apicall"

export default function FastFood(){
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(()=>{
        const loadData = async () => {
            const result = await apiCall("/search?q=pizza")
            setData(result)
            const result2 = await apiCall("/search?q=pasta")
            setData2(result2)
        }
        loadData()
    },[])
    
    return(
        <div className="vegBox">
            {
                data.map((item)=>(
                    <div key={item.id}>
                        <PreviewBox title={item.name} image={item.image} discription="fast food"></PreviewBox>
                    </div>
                ))
            }
            {
                data2.map((item)=>(
                    <div key={item.id}>
                        <PreviewBox title={item.name} image={item.image} discription="fast food"></PreviewBox>
                    </div>
                ))
            }
        </div>
    )
}