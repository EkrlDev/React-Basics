
class NumberList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numbers:[1,2,3,4,5,6]
        }
    }

    removeItem = (num) => {
        this.setState({numbers: this.state.numbers.filter(n=> n !== num)})
    }


    
    render () {
        const nums = this.state.numbers.map(n => <NumberItem value={n} remove={this.removeItem}/>)
        return (
            <div className='Flipper'>
                {nums}
            </div>
            
        )
    }
}