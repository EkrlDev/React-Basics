import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

export default function Navbar(props) {
    const DogList = props.dogs.map(dog =>
            <li className='nav-item' key={dog.name}>
                <NavLink to={`./dogs/${dog.name}`} className='nav-link'>{dog.name}</NavLink>
            </li>
        )
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <Link to='/dogs' className='nevbar-brand'>Dog App</Link>
           <button 
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target="#navbarNav"
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to='/dogs' className="nav-link">Home</NavLink>
                    </li>
                    {DogList}
                </ul>

            </div>
       </nav>
    )
}