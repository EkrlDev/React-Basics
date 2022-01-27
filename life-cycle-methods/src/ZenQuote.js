import React, { Component } from 'react';
import "./Loading.css";
import axios from 'axios';

class Zenquote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote : "",
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(() => {
                this.setState({quote: response.data, isLoaded: true});
            }, 3000);
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ?
                    (<div>
                        <h2>Always Remember...</h2>
                        <p>{this.state.quote}</p>
                    </div>) : 
                    (
                        <div className="loader">

                        </div>
                    )
                }
            </div>
        );
    }
}

export default Zenquote;



