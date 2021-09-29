import React, { Component } from 'react';


class Box extends Component {

    handleClick = () => {
        this.props.removeBox(this.props.id)

    }

    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }} />
                <button onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

export default Box;
