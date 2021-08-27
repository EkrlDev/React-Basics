
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Form />
        <MultipleForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
