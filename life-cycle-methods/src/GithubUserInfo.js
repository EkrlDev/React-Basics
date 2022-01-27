import React, { Component } from 'react';
import axios from 'axios';

class Githubuserinfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl:"",
            name:""
        }
    }
    async componentDidMount() {
        const url = `http://api.github.com/users/${this.props.userName}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({imgUrl: data.avatar_url, name: data.name})
    }
    render() {
        return (
            <div>
                <h1>Github User: {this.state.name}</h1>
                <img src={this.state.imgUrl} />
            </div>
        );
    }
}

export default Githubuserinfo;
