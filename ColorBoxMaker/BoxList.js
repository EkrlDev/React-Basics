


class BoxList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                
            
            ],
            
        }
    }

    addItem = (item) => {
        this.setState(state => ({
            items: [...state.items, item]
        }))
        console.log("items", this.state.items)
    }

      

    removeItem = (evt) => {
        let NewItems = [...this.state.items]
        console.log("value", evt.target.value)
        const index = evt.target.value
        console.log("index:",index);
        delete NewItems[index]
        this.setState({
            items: NewItems  
        })

        
       
    }

    renderItem = () => {
        
        return (
             this.state.items.map(item => {
                return <div>
                    <div style={item}>BOX</div>
                    <button value={this.state.items.indexOf(item)} onClick={this.removeItem}>Remove</button>
                </div>
             }
                )
           
        )
    }

    render() {
        
        return (
            <div>
                <h1>Colored Boxes</h1>
                <Box addItem = {this.addItem} />
                {this.renderItem()}

            </div>
            
        )
    }
}

