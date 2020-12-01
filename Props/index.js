
class App extends React.Component {
  
  render() {
    
    return (
      <div>
        <Hello to="Jane" from="Jack" bangs={10}/>
        <Hello to="Cristina"/>
        <Hello to="Sarah" from="Paul" bangs={4} img="https://media.giphy.com/media/xUySTQZfdpSkIIg88M/giphy.gif"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
