import './Die.css';

function Die(props) {
    return (
        <div>
            <i className={`Die fas fa-dice-${props.num} ${props.rolling && 'shaking'}`}></i>
        </div>
    )
}

export default Die;