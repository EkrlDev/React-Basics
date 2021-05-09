class NumberItem extends React.Component {

handleRemoveNumber = () => {
    this.props.removeNumber(this.props.value);
}
    

    render () {
        return (
            <div>
                {this.props.value}
                <button onClick={this.handleRemoveNumber}>X</button>
            </div>
        )
    }
}
