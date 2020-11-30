
function getMood() {
    const moods = ['Angry', 'Hungry', 'Lovely', 'Anxious', 'Happy'];
    return moods[Math.floor(Math.random() * moods.length)];
}
class Hello extends React.Component {
    render () {
        return (
            <div>
                <h1>My Mood Is = {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));