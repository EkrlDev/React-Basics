
class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formName: ""
        }
    }

    handleChange = (evt) => {

        this.setState({ formName: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        alert(this.state.formName);
        this.setState({ formName: "" })

    }

    render() {
        
        return (
            <div>
                <h1>Controlled Form Demo</h1>
                <form onSubmit={this.handleSubmit} className="Flipper">
                <input onChange={this.handleChange} value={this.state.formName}></input>
                <button>Submit!</button>
                </form>

            </div>
            
        )
    }
}

