import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch'
import Navigate from './Navigate'
import './App.css';


export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class App extends Component {

 
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Navigate />
        <Routes>
          <Route exact path="/food/:name" element={<Food />} />
          <Route exact path="/food/:foodName/drink/:drinkName" element={<Meal />} />
          <Route exact path="/foodSearch" element={<FoodSearch />} />
          
        </Routes>
       
      </div>
    );
  }
}
 
export default withRouter(App);
