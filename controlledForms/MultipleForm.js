
class MultipleForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            address: ""
        }
    }

    handleChange = (evt) => {

        this.setState({ [evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        alert([this.state.userName, this.state.email, this.state.address]);
        this.setState({ userName: "", email:"", address: ""})

    }

    render() {
        
        return (
            <div>
                <h1>Controlled Form Demo</h1>
                <form onSubmit={this.handleSubmit} className="Flipper">
                    <table className="table">
                        <td>
                            <tr>
                                <input name="userName" onChange={this.handleChange} value={this.state.userName}></input>
                            </tr>
                            <tr>
                                <input name="email" onChange={this.handleChange} value={this.state.email}></input>
                            </tr>
                            <tr>
                                <input name="address" onChange={this.handleChange} value={this.state.address}></input>
                            </tr>
                        
                        </td>
                    </table>
                <button>Submit!</button>
                </form>

            </div>
            
        )
    }
}

