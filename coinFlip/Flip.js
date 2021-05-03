
class Flip extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            face: 'head',
            totalFlip: 0,
            head: 0,
            tail: 0,
        }
    }

    static defaultProps = {
        faces:['head', 'tail']
    }

    
    incrementTotalFlip(prevState){
        return {totalFlip: prevState.totalFlip + 1};
      }

    incrementHead(prevState){
        return {head: prevState.head + 1};
      }

    incrementTail(prevState){
        return {tail: prevState.tail + 1};
      }
    
       

    handleClick = () => {
        const instantface = this.props.faces[Math.floor(Math.random() * 2)];

        this.setState({face: instantface})
        this.setState(this.incrementTotalFlip);
        instantface === 'head' ? this.setState(this.incrementHead) : this.setState(this.incrementTail) ;
        console.log(instantface);
    }
    
    render () {
        return (
            <section className='Flipper'>
                <Coin side={this.state.face}/>
                <button onClick={this.handleClick}>Flip Me</button>
                <p>{`Out of ${this.state.totalFlip} flips, there have been ${this.state.head} Heads and ${this.state.tail} Tails`}</p>
            </section>
            
        )
    }
}