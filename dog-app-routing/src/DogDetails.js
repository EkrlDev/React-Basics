import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './DogDetails.css';



export default function DogDetails(props) {

    let params = useParams();
    const dogs = props.dogs;
    let navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
      };
    
     let Dog = dogs.map(dog =>{
        if(params.name === dog.name)
        return <div className="container">
                    <div className='DogDetails row justify-content-center mt-5'>
                        <div className='col-11 col-lg-5'>
                            <div className='DogDetails-card card'>
                                <img className='card-img-top' src={dog.src}  alt={dog.name}/>
                                <div className='card-body'>
                                    <h2 className='card-title'>{dog.name}</h2>
                                    <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
                                </div>
                                <ul className='list-group list-group-flush'>
                                    {dog.facts.map((fact, i) =><li className='list-group-item' key={i}>{fact}</li>)}
                                </ul>
                                <div className='card-body'>
                                    <button onClick={handleGoBack} className='btn btn-info'>GO BACK</button>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                </div> 
    })
    
        return (
            <div>
               {Dog}
            </div>
        );
    
}

