
class ColorChanger extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color:'turquoise'
        }
    }

    static defaultProps = {
        colors:['green', 'yellow', 'red', 'blue', 'magenta'],
    }

    colorChange(newColor){
        this.setState({color:newColor})
    }

    
    
    render () {

        const boxes = this.props.colors.map((c) => (
            <button className="Button" style={{backgroundColor: c}} onClick={this.colorChange.bind(this, c)}>Change Color</button>
        ))
        
        return (
            <div className='Container' style={{backgroundColor: this.state.color}} >
                
                    {boxes}
                    
            </div>
            
        )
    }
}