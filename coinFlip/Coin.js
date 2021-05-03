class Coin extends React.Component {
    render () {
        return (
            <div >
                <img className="Coin" src={`${this.props.side}.jpg`} alt=""/>
            </div>
        )
    }
}
