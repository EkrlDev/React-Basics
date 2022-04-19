import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DogList(props) {
    let navigate = useNavigate();
    

    
    const dogs = props.dogs;

    const DogList = dogs.map(dog =>(
        
        <div>
            <img src={dog.src}  alt={dog.name} onClick={() => navigate(`/dogs/${dog.name}`)}/>
            <h2>{dog.name}</h2>
        </div>
    ))
    
        return (
            <div>
                {DogList}
            </div>
        );
    
}