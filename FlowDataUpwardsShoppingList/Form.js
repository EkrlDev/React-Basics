
class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            qty: ""
        }
    }

    handleChange = (evt) => {

        this.setState({ [evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name: "",
            qty: ""
        })

    }

    render() {
        
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} className="Flipper">
                    <table className="table">
                        <td>
                            <tr>
                                <label for="name">Name:</label>
                                <input 
                                    placeholder="Name"
                                    id="name" 
                                    name="name" 
                                    onChange={this.handleChange} 
                                    value={this.state.name}></input>
                            </tr>
                            <tr>
                                <label for="quantity">Quantity:</label>
                                <input 
                                    placeholder="Quantity"
                                    id="quantity"  
                                    name="qty" 
                                    onChange={this.handleChange} 
                                    value={this.state.qty}></input>
                            </tr>
                        
                        </td>
                    </table>
                <button>Submit!</button>
                </form>

            </div>
            
        )
    }
}

