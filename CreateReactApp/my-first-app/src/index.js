import React from 'react';
import ReactDOM from 'react-dom';
import foods from './Foods';
import {Choice, Remove} from './Helpers';

//Randomly draw a fruit from the array
let fruit = Choice(foods);
//Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I’d like one ${fruit}, please.`)
//Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${fruit}`)
//Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?')
//Remove the fruit from the array of fruits
let remainingFruits = Remove(foods, fruit);
//Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${remainingFruits} left.`)

class App extends React.Component {
  render() {

    return (
      <div>
       <p>I’d like one {fruit}, please.</p>
       <p>Here you go: {fruit}</p>
       <p>Delicious! May I have another?</p>
       <p>`I’m sorry, we’re all out. We have {remainingFruits} left.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));