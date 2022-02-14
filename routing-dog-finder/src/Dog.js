import React from 'react';
import { useParams } from "react-router-dom";



export default function Dog(props) {

    let params = useParams();
    const dogs = props.dogs;

    
    
     let Dog = dogs.map(dog =>{
        if(params.name === dog.name)
        return <div>
                <h1>{dog.name}</h1>
                <img src={dog.src} />
                <ul>
                    {dog.facts.map(facts =><li>{facts}</li>)}
                </ul>
            </div> 
    })
    
        return (
            <div>
               {Dog}
            </div>
        );
    
}

