class Friends extends React.Component {
    render () {
        const {name, hobbies} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(e => <li>{e}</li>)}
                </ul>
            </div>
        )
    }
}
