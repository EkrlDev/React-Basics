
class Timer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        console.log("in constructor")
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({time: new Date})  
        }, 1000);
        console.log("in componentDidMount")
    }
    
    render () {
        console.log("in render")
        return (
            <h2>
                 {this.state.time.getSeconds()}   
            </h2>
            
        )
    }
}