import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
    }

    addBox = (box) => {
        this.setState({ boxes: [...this.state.boxes, box]})

    }

    removeBox = (id) => {
        this.setState({boxes: [...this.state.boxes.filter(box => box.id !== id)]})
        console.log(`${id} removed`)
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    color={box.color}
                    removeBox={this.removeBox}
            />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm addBox = {this.addBox} />
                {boxes}

            </div>
        );
    }
}

export default BoxList;
