import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            color: ""
        }
    }

    handleChange = (evt) => {

        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newBox = {...this.state, id: uuidv4()}
        this.props.addBox(newBox)
        this.setState({
            height: "",
            width: "",
            color: ""
        })

    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} className="Flipper">
                <input 
                    placeholder="Height"
                    id="height" 
                    name="height"
                    value={this.state.height} 
                    onChange={this.handleChange}>

                </input>      
                                
                <input 
                    placeholder="Width"
                    id="width"  
                    name="width"
                    value={this.state.width} 
                    onChange={this.handleChange}>

                </input>

                <input 
                    placeholder="BG Color"
                    id="bgcolor"  
                    name="color"
                    value={this.state.color} 
                    onChange={this.handleChange}>

                </input>
                                    
                <button>Add Box</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;
