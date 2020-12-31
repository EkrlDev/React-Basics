
class StateClicker extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      num: 1
    }
  }

  handleClick = () => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    this.setState({num:randNum})
  }

  render() {

      return (
        <div>
          <h2>{`Number is ${this.state.num}`}</h2>
          {this.state.num !== 7 
            ? <button onClick={this.handleClick}>Random Number</button>
            : <h3>You Win!</h3>}
        </div>
        );  
    
    }
    
  }


ReactDOM.render(<StateClicker />, document.getElementById("root"));
