
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
      icons:["bone"]
    }
  }

  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let randIcon = this.props.options[idx];
    this.setState({icons: [...this.state.icons, randIcon]});
  }

  render() {
      const icons = this.state.icons.map(icn => <i className={`fas fa-${icn}`} />);
      console.log(icons);
      return (
        <div>
          <h1>Icons: {icons}</h1>
          <button onClick={this.addIcon}>Add Icon</button>
        </div>
        );  
    
    }
    
  }


ReactDOM.render(<StateClicker />, document.getElementById("root"));
