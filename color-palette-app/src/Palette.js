import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(newLevel) {
        this.setState({level: newLevel});
        console.log(this.state.level)
    }
    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>(
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className="Palette">
                <Slider 
                    defaultValue={this.state.level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default Palette;
