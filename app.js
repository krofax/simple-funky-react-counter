import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
        this.subtractClick = this.subtractClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            setInterval()
            
        })
    }
        resetClick() {
        this.setState(prevState => {
            return {
                count: prevState.count = 0
            }
        })
    }
            subtractClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.subtractClick}>Subtract!</button>
                <button onClick={this.resetClick}>Reset!</button>
                
            </div>
        )
    }
}

export default App
