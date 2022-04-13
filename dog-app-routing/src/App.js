import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import Doglist from './Doglist';
import DogDetails from './DogDetails';
import Navbar from './Navbar';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
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
      <div>
        <Navbar dogs={this.props.dogs}/>
        <Routes>
          <Route path='/dogs' element={<Doglist dogs={this.props.dogs}/>} />
          <Route path='/dogs/:name' element={<DogDetails dogs={this.props.dogs}/>} />
        </Routes>
      </div>
    );
  }
  
}

export default App;