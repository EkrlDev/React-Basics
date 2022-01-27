import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps = {
    faces : ["one", "two", "three", "four", "five", "six"],
    val: 5
  }
  
  render() {
    let classes = `Die fas fa-dice-${this.props.faces[this.props.val - 1]} fa-5x `;
    if(this.props.locked) classes += "Die-locked ";
    if(this.props.isRolling) classes += "Die-rolling";
    return (
      <i 
        className={classes}
        onClick={() => this.props.handleClick(this.props.idx)}
      />
        
    );
  }
}

export default Die;
