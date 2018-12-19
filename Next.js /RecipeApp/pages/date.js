import React from "react";
export default class Date extends React.Component {
    state = {
        secs: 0
    }
    componentDidMount() {
        this.interval = setInterval(() => {this.setState({secs: new Date().getTime() /1000})},1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return(
            <div>
                <h1>{this.state.secs}</h1>
            </div>
        )
    }
}