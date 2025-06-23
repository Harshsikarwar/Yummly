import React from "react";

export default function RecipeBox({
    title="Biryani",
    image="https://i.pinimg.com/1200x/c5/af/1d/c5af1d0cf7cbfb05fd7dc045855323bb.jpg",
    ingredients="none",
    prepareTime="2hrs",
    Instructions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit distinctio veniam delectus sapiente error asperiores debitis vero, voluptatibus, quasi quam possimus eligendi perferendis accusantium cum sed dolore voluptas corporis."
}){
    return(
        <div className="RecipeBox">
            <img className="recipeImage" src={image}></img>
            <div className="recipeSubBox">
                <div className="titleImg">
                    <img className="recipeTitleImg" src="https://cdn-icons-png.flaticon.com/128/17588/17588752.png"></img>
                    <h3 className="recipeMainTitle">{title}</h3>
                </div>
            </div>
            <div className="recipeSubBox">
                <div className="titleImg">
                    <img className="recipeTitleImg" src="https://cdn-icons-png.flaticon.com/128/14899/14899824.png"></img>
                    <h3 className="recipeTitle">Ingredients</h3>
                </div>
                <p className="recipeDiscript">{ingredients}</p>
            </div>
            <div className="recipeSubBox">
                <div className="titleImg">
                    <img className="recipeTitleImg" src="https://cdn-icons-png.flaticon.com/128/15354/15354817.png"></img>
                    <h3 className="recipeTitle">Prepare Time</h3>
                </div>
                <p className="recipeDiscript">{prepareTime} min</p>
            </div>
            <div className="recipeSubBox">
                <div className="titleImg">
                    <img className="recipeTitleImg" src="https://cdn-icons-png.flaticon.com/128/15399/15399160.png"></img>
                    <h3 className="recipeTitle">Instructions</h3>
                </div>
                <p className="recipeDiscript">{Instructions}</p>
            </div>
        </div>
    )
}