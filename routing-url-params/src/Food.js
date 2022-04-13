import React from 'react';
import { useParams } from "react-router-dom";



export default function Food() {
    let params = useParams();
    const url = `http://source.unsplash.com/1600x900/?${params.name}`
        console.log('params:',params);
        return (
            <div>
                <h1>I like eating {params.name}</h1>
                <img src={url} alt={params.name} />
            </div>
        );
    
}
 

