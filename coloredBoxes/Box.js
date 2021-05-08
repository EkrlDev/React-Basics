class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color:this.props.randColor
    }

    }

    handleClick = () => {
        let newColor;
        do {
            newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        } while (this.state.color === newColor)

        this.setState({color: newColor});
    }

    render () {
        return (
            <div onMouseEnter={this.handleClick} className="box" style={{ backgroundColor: this.state.color }}>
                
            </div>
        )
    }
}
