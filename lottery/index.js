
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Ball num={17}/>
        <Ball num={16}/>
        <Ball num={7}/>
        <Ball num={6}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
