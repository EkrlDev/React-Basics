import React from 'react';
import { useParams } from "react-router-dom";



export default function Meal() {
    let params = useParams();
    const foodUrl = `http://source.unsplash.com/1600x900/?${params.foodName}`;
    const drinkUrl = `http://source.unsplash.com/1600x900/?${params.drinkName}`;
        
    return (
        <div>
            <h1>This is a meal of {params.foodName} and {params.drinkName} </h1>
            <img src={foodUrl} alt="" />
            <img src={drinkUrl} alt="" />
        </div>
    );
    
}