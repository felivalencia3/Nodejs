import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.state = {screen: "index"}
    }
    handleLoginClick() {
        this.setState({screen:"login"})
    }
    handleSignUpClick() {
        this.setState({screen: "sign"})
    }
    handleBackClick() {
        this.setState({screen: "index"})
    }
    render() {
        const screen = this.state.screen;
        let form;
        if(screen === "index") {
            form = <div><button onClick={this.handleLoginClick}>Login</button><button onClick={this.handleSignUpClick}>Sign-Up</button></div>
        } else if (screen === "login") {
            form = <div><Login /><button onClick={this.handleBackClick}>Back</button></div>
        } else if (screen === "sign") {
            form = <div><SignUp /><button onClick={this.handleBackClick}>Back</button></div>
        }
        return <div>{form}</div>
    }
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: "",pass: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
    }
    handleSubmit(event) {
        axios.post("http://192.168.0.6:8081/login",
            querystring.stringify({
                user: this.state.user,
                pass: this.state.pass
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function(response) {
                alert(JSON.stringify(response.data));
                console.log(response);
        });
        event.preventDefault()
    }
    handleChangeUser(event) {
        this.setState({user: event.target.value})
    }
    handleChangePass(event) {
        this.setState({pass: event.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Username</h1>
                <input value={this.state.user} id="user" name="user" onChange={this.handleChangeUser}/>
                <h1>Password:</h1>
                <input value={this.state.pass} id="pass" name="pass" onChange={this.handleChangePass}/>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
class SignUp extends React.Component {
    render() {
        return <h1>Sign-Up</h1>
    }
}