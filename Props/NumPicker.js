function getNum() {
    return Math.floor(Math.random() * 10) + 1;
  }
  class NumPicker extends React.Component {
    render() {
      const num = getNum();
      let msg; //we will set content as a variable and render it in main <div>
      if(num === 7) {
          msg = 
          <div>
              <h2>CONGRATS! YOU WIN.</h2>
              <img src='https://media.giphy.com/media/l4q83E0RjRSGLXBLO/giphy.gif' />
          </div>
      } else {
          msg = <h2>UNFORTUNATELY! YOU LOSE.</h2>
      }
      return (
        <div>
          <h1>My luck number is: {num}</h1>
          {msg}
          <p>{num === 7 ? "Good!!!" : "Baad!!!"}</p>
        </div>
      );
    }
  }
  
  