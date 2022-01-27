import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';
import './Deck.css';

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class DeckACard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deck: null,
            drawn: []
        }
        this.getACard = this.getCard.bind(this)
    }

    async componentDidMount() {
        let response = await axios.get(API_URL);
        this.setState({deck: response.data})
    }

    componentDidUpdate() {
      
    }

   async getCard() {
        let deck_id = this.state.deck.deck_id
        try {
            const cardUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`
            let cardResponse = await axios.get(cardUrl);
            if(!cardResponse.data.success) {
                throw new Error("No card")
            }
            let card = cardResponse.data.cards[0]
            this.setState(st => ({drawn: [...st.drawn, {
                id: card.code,
                image: card.image,
                value: `${card.value} of ${card.suit}`
            }]}))
            
            
        } catch (error) {
            alert(error)
        }
    }
   

    render () {
        const cards = this.state.drawn.map(card => (
        <Card key= {card.id} id={card.id} image={card.image} value={card.value}/>
        ));
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getACard}>Gimme A Card</button>
                <div className="Deck-cardarea">{cards}</div>
                
            </div>
        )
    }
}

export default DeckACard;