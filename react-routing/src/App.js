import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';
import Template from './Template';
import './App.css';



class App extends Component {
  render() { 
    return (
      <div className="App">
        <nav className="App-nav">
          <Template>
            <Link to="/">About</Link>
          </Template>
          <Template>
            <Link to="/dog">Dog</Link>
          </Template>
          <Template>
            <Link to="/contact">Contact</Link>
          </Template>
        </nav>
        <Routes> 
          <Route path='/' element={<About />} />
          <Route path='/dog' element={<Dog name="Muffin" />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    
      </div>
    );
  }
}
 
export default App;
