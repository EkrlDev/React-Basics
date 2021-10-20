import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val:6
  }

  handleClick = () => {
    this.props.handleClick(this.props.idx)
  }
    
  render() {
    let classes = `Die fas fa-dice-${this.props.numberWords[this.props.val - 1]} fa-5x `;
    if(this.props.locked) classes += "Die-locked ";
    if(this.props.rolling) classes += "Die-rolling";

    return (
      <i
        className={classes}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
