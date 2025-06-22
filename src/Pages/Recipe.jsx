import { useState, useEffect } from "react";
import {RecipeBox} from "../Components"
import { useSelector } from "react-redux";
import apiCall from "../conf/Apicall";

export default function Recipe(){
    const [data, setData] = useState([]);
    const TITLE = useSelector((state) => (state.recipe.title))
    useEffect(()=>{
        const loadData = async () => {
            const result = await apiCall("/search?q="+TITLE)
            setData(result)
        }
        loadData()
    },[])
    console.log(data)
    return(
        <div>
            {
                data.map((item)=>(
                    <div key={item.id}>
                        <RecipeBox title={item.name} image={item.image} ingredients={item.ingredients} Instructions={item.instructions} prepareTime={item.prepTimeMinutes
} />
                    </div>
                ))
            }
        </div>
    )
}