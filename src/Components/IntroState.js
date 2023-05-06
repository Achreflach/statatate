import { Component } from "react";

class IntroState extends Component {
    constructor(props) {
        console.log("constructor()")
        super(props);
        this.state = {
        count: 0,
        timer: 0,
        interval: null
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }
    
    
    componentDidMount() {
        console.log("componentDidMount()");
        // this.setState({
        //     interval: setInterval(() => {
        //         this.setState({timer: this.state.timer + 1})
        //     }, 1000)
        // })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }

    render() {
        console.log("render()");
    return (
        <div>
            <button onClick={this.increment}>(+)</button>
            <span>{this.state.count}</span>
            <button onClick={this.decrement}>(-)</button>
            <h3>{this.state.timer}</h3>
        </div>
    )
    }
}
export default IntroState