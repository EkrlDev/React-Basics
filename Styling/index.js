
class App extends React.Component {
  render() {

    return (
      <div className="Machine">
        <h1>Welcome To The Slot Machine</h1>
        <Machine s1="X" s2="Y" s3="X"/>
        <Machine s1="X" s2="X" s3="X"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
