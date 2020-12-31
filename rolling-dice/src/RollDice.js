import React, { Component } from 'react'
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            die1Num: 'one',
            die2Num: 'one',
        }
        this.nums = ['one', 'two', 'three', 'four', 'five', 'six']
    }

    handleClick = () => {
        const num1 = Math.floor(Math.random() * this.nums.length);
        const num2 = Math.floor(Math.random() * this.nums.length);
        this.setState({die1Num: this.nums[num1], die2Num: this.nums[num2]})
    }
    render () {
        return (
            <div>
                <Die num={this.state.die1Num} />
                <Die num={this.state.die2Num} />
                <button onClick={this.handleClick}>Roll</button>
            </div>
        )
    }
}

export default RollDice;