
class App extends React.Component {
  render() {

    return (
      <div>
       <Friends
        name="Elliot" 
        hobbies = {['Singing', 'Coding', 'Swimming']}
       />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
