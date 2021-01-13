
class StateClicker extends React.Component {

  static defaultProps = {
    options: [
      "angry",
      "archive",
      "anchor",
      "archway",
      "baby",
      "bell",
      "bone",
      "bolt",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  }

  constructor(props) {
    super(props),
    this.state = {
      icons:[]
    }
  }

  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let randIcon = this.props.options[idx];
    this.setState({icons: [...this.state.icons, randIcon]});
    console.log(this.state.icons);
  }

  render() {

      return (
        <div>
          
         
          <button onClick={this.addIcon}>Add Icon</button>
        </div>
        );  
    
    }
    
  }


ReactDOM.render(<StateClicker />, document.getElementById("root"));
