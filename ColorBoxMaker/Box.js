
class Box extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            backgroundColor: ""
        }
    }

    handleChange = (evt) => {

        this.setState( evt.target.name === "backgroundColor" ? {[evt.target.name]: evt.target.value} : {[evt.target.name]: parseInt(evt.target.value) })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            height: "",
            width: "",
            backgroundColor: ""
        })

    }

    render() {
        
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} className="Flipper">
                <input 
                    placeholder="Height"
                    id="height" 
                    name="height" 
                    onChange={this.handleChange} 
                    value={this.state.height}>

                </input>      
                                
                <input 
                    placeholder="Width"
                    id="width"  
                    name="width" 
                    onChange={this.handleChange} 
                    value={this.state.width}>

                </input>

                <input 
                    placeholder="BG Color"
                    id="bgcolor"  
                    name="backgroundColor" 
                    onChange={this.handleChange} 
                    value={this.state.backgroundColor}>

                </input>
                                    
                <button>Add Box</button>
                </form>

            </div>
            
        )
    }
}

