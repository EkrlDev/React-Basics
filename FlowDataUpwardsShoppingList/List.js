


class List extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: "Milk", qty: "2 bottles"},
                {name: "Bread", qty: "2 slices"}
            
            ],
            
        }
    }

    addItem = (item) => {
        this.setState(state => ({
            items: [...state.items, item]
        }))
        console.log(item)
    }

    renderItem() {
        return (
            <ul>
                {this.state.items.map(item =>
                    <li key={item.index}>{item.name} : {item.qty}</li>)}

            </ul>
        )
    }

    render() {
        
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItem()}
                <Form addItem = {this.addItem} />

            </div>
            
        )
    }
}

