
class StateClicker extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      score: 0
    }
  }

  incrementScore(prevState){
    return {score: prevState.score + 1};
  }

  singleKill =() => {
    this.setState(this.incrementScore);
  }
  tripleKill = () => {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }


  render() {

      return (
        <div>
          <h2>{`Number is ${this.state.score}`}</h2>
         
          <button onClick={this.singleKill}>Single Kill</button>
          <button onClick={this.tripleKill}>Triple Kill</button>
        </div>
        );  
    
    }
    
  }


ReactDOM.render(<StateClicker />, document.getElementById("root"));
