class NumberItem extends React.Component {


    handleClick = () => {
        this.props.remove(this.props.value)
    }

    render () {
        return (
            <li >
                {this.props.value}
                <button onClick={this.handleClick}>X</button>
            </li>
        )
    }
}
