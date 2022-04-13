import React, { Component } from 'react';
import './Template.css';

class Template extends Component { 
    render() { 
        return (
            <div className="Filter">
                {this.props.children}
            </div>
        );
    }
}
 
export default Template;
