
class NumberList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numbers:[1,2,3,4,5,6]
        }
    }

    removeNumber = (num) => {
        this.setState({numbers: this.state.numbers.filter(n => n !== num)})
    }

    render() {
        const nums = this.state.numbers.map((n) => (<NumberItem key={n} value={n} removeNumber={this.removeNumber} />));
        return (
            <div className="Flipper">
               {nums} 
            </div>
        )
    }
}

