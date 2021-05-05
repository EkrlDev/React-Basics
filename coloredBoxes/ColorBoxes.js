
class ColorBoxes extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static defaultProps = {
        colors:['green', 'yellow', 'red', 'blue', 'magenta', 'navy', 'orange', 'gray', 'maroon', 'black', 'purple', 'fuchsia'],
        numOfBoxes: 18
    }

    randomColor = () => {
        return this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    }

    
    
    render () {

        const boxes = Array.from({length: this.props.numOfBoxes}).map((box, index) => (
            <Box randColor={this.randomColor()} colors={this.props.colors} key={index}/>
        ))
        
        return (
            <section className='Container'>
                 {boxes}
            </section>
            
        )
    }
}