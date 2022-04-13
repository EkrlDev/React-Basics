import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';



export default function Navigate() {
    let navigate = useNavigate();
    function handleClick() {
        alert('You are logged in!')
        navigate('/food/sushi');
      };
    function handleGoBack() {
        navigate(-1);
      };
        return (
            <div className="Navbar">
                <button onClick={handleGoBack}>Go Back</button>
                <button onClick={handleClick}>Login</button>
            </div>
        );
    
}
 