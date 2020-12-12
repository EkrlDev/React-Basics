import React, { Component } from 'react';
import './Pokecard.css'

const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render () {
        let imgSrc = `${Poke_API}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt=""/>
                <p>Type : {this.props.type}</p>
                <p>EXP: {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard;