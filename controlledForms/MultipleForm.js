
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
                                <label htmlFor="userName">Name: </label>
                                <input id="userName" name="userName" onChange={this.handleChange} placeholder="Name" value={this.state.userName}></input>
                            </tr>
                            <tr>
                                <label htmlFor="email">E-mail: </label>
                                <input id="email" name="email" onChange={this.handleChange} placeholder="E-mail" value={this.state.email}></input>
                            </tr>
                            <tr>
                                <label htmlFor="note">Note: </label>
                                <input id="note" name="address" onChange={this.handleChange} placeholder="Note" value={this.state.address}></input>
                            </tr>
                        
                        </td>
                    </table>
                <button>Submit!</button>
                </form>

            </div>
            
        )
    }
}

