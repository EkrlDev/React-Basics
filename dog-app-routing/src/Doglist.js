import React from 'react';
import './Doglist.css';

export default function Doglist(props) {
    return(
        <div>
            <h1 className='display-1 text-center'>Dog List</h1>
            <div className='container'>
                <div className='row'>
                    {props.dogs.map(dog => (
                        <div className='Dog col-lg-4 text-center' key={dog.name}>
                            <img src={dog.src} alt={dog.name} />
                            <h3>{dog.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}