class Lottery extends React.Component {
    static defaultProps = {
        maxNum: 40,
        maxBalls: 6
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({length: this.props.maxBalls})
        }
    }

    handleClick = () => {
        this.setState(currentState => ({
            numbers: currentState.numbers.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)}))
    }
    
    render () {
        const result = this.state.numbers.map(num => <Ball num={num} />) 
        return (
            <section className='Lottery'>
                <div>
                {result}
                </div>
                <button onClick={this.handleClick}>Roll</button>
            </section>
            
        )
    }
}