import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';



export default function Navigate(props) {
    let navigate = useNavigate();
    
    const dogNames = [];
    props.dogs.map(dog => (dogNames.push(dog.name)));
    
        return (
            <nav className='Navbar'>
                {dogNames.map(i => <Link to={`./dogs/${i}`}>{i}</Link>)}
            </nav>
        );
    
}
 