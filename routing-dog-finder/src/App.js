import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import DogList from './DogList';
import Dog from './Dog';
import Navigate from './Navigate'
import './App.css';


class App extends Component {

 
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }


  render() {
    
  
    return (
      <div className="App">
        <Navigate dogs={this.props.dogs}/>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={this.props.dogs}/>} />
          <Route path="/dogs/:name" element={<Dog dogs={this.props.dogs}/>} />
        </Routes>
       
      </div>
    );
  }
}
 
export default App;
