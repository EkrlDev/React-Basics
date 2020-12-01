class Machine extends React.Component {
    render () {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const font = winner ? 'green' : 'red'
        return (
            <div>
                <p style={{fontSize: '30px', backgroundColor: 'purple'}}>{s1} {s2} {s3}</p>
                <p style={{color: font}}>{winner ? 'You Win!' : 'You Lose!'}</p>
            </div>
        )
    }
}
