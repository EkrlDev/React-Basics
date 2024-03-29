import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css'


class JokeList extends Component {
    static defaultProps = {
        numOfJokes : 10
    }

    constructor(props) {
        super(props);
        this.state = { 
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"), 
            loading: false
        }
        this.loadedItems = new Set(this.state.jokes.map(j => j.text));
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
        console.log(this.loadedItems)
    }

   async getJokes() {
    try {
        let jokes = []; 
        while(jokes.length < 10) {
            let res = await axios.get("https://icanhazdadjoke.com/", {headers: {'Accept': 'application/json'}});
            let joke = res.data.joke
            if(!this.loadedItems.has(joke)){
                jokes.push({text:joke, votes:0, id:uuidv4()}); 
            } else {
                console.log("dublicate");
            }
        }
       this.setState(st => ({jokes: [...st.jokes, ...jokes], loading: false}))
       window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    } catch (error) {
        alert(error.message);
        this.setState({loading: false});
    }
   }

   handleVote(id, value) {
     this.setState(st => ({
         jokes: st.jokes.map(j => (
             j.id === id? {...j, votes: j.votes+ value} : j
         ))
     }), ( ) => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))

   }

   handleClick () {
       this.setState({loading: true}, this.getJokes);
   }


    render() {
        if(this.state.loading) {
            return (<div className="JokeList-spinner">
                <i className="far fa-8x fa-laugh fa-spin" />
                <h1 className="JokeList-title">Loading...</h1>
            </div>)
        };
        let sortedJokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        return ( 
            <div className="JokeList">
                <div className="JokeList-sidebar">     
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="" />
                    <button className="JokeList-getmore" onClick={this.handleClick}>New Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {sortedJokes.map(j => (
                        <Joke key={j.id} text={j.text} votes={j.votes} upVote={() => this.handleVote(j.id, 1)} downVote={() => this.handleVote(j.id, -1)}/>
                    ))}
                </div>
            </div>
         );
    }
}
 
export default JokeList;

