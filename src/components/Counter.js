import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('callback value', this.state.count);
        })
        console.log(this.state.count);
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log('callback value', this.state.count);
        })
        console.log(this.state.count);
    }
    render() {
        return ( <
            div className = "proj1" >
            <
            div className = 'counterp' > < h1 > COUNTER: { this.state.count } < /h1></div >
            <
            button onClick = {
                () => this.increment() }
            className = "btn1" > < b > + < /b></button >
            <
            button onClick = {
                () => this.decrement() }
            className = "btn2" > < b > - < /b></button >
            <
            /div>

        )
    }
}
export default Counter;