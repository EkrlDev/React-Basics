import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {

    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props)
        this.state = {
            die1Num: 'one',
            die2Num: 'one',
            rolling: false
        }
    }

    handleClick = () => {
        const num1 = Math.floor(Math.random() * this.props.faces.length);
        const num2 = Math.floor(Math.random() * this.props.faces.length);
        this.setState({die1Num: this.props.faces[num1], die2Num: this.props.faces[num2], rolling: true});

        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    render () {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die num={this.state.die1Num} rolling={this.state.rolling}/>
                    <Die num={this.state.die2Num} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling!' : 'Roll Dice'}</button>
            </div>
        )
    }
}

export default RollDice;