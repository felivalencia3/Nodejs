import React from 'react';

import axios from 'axios';
import querystring from 'querystring';
import './Main.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {
      screen: 'index',
    };
  }

  handleLoginClick() {
    this.setState({
      screen: 'login',
    });
  }

  handleSignUpClick() {
    this.setState({
      screen: 'sign',
    });
  }

  handleBackClick() {
    this.setState({
      screen: 'index',
    });
  }

  render() {
    const {
      screen,
    } = this.state;
    let form;
    if (screen === 'index') {
      form = (
        <div id="particles">
          <div id="webcoderskull">
            <div className="bg-text">
              <button
                type="button"
                onClick={
          this.handleLoginClick
        }
                className="button"
              >
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                <span>
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
        Login
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }

                </span>
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }

              </button>
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              <button
                type="button"
                className="button"
                onClick={
          this.handleSignUpClick
        }
              >
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                <span>
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
        Sign - Up
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }
                  {' '}
                  {
          ' '
        }

                </span>
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }
                {' '}
                {
          ' '
        }

              </button>
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }
              {' '}
              {
          ' '
        }

            </div>
          </div>
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }

        </div>
      );
    } else if (screen === 'login') {
      form = (
        <div>
          <Login />
          <button
            type="button"
            onClick={
          this.handleBackClick
        }
          >
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
        Back
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }

          </button>
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }

        </div>
      );
    } else if (screen === 'sign') {
      form = (
        <div>
          <SignUp />
          <button
            type="button"
            onClick={
          this.handleBackClick
        }
          >
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
        Back
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }
            {' '}
            {
          ' '
        }

          </button>
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }
          {' '}
          {
          ' '
        }

        </div>
      );
    }
    return (
      <div>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        form
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }

      </div>
    );
  }
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  handleSubmit(event) {
    axios.post('http://127.0.0.1:8081/login',
      querystring.stringify({
        user: this.state.user,
        pass: this.state.pass,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((response) => {
      if (response.data === true || response.data === 'true') {
        window.open('http://www.google.com');
      }
    });
    event.preventDefault();
  }

  handleChangeUser(event) {
    this.setState({
      user: event.target.value,
    });
  }

  handleChangePass(event) {
    this.setState({
      pass: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={
        this.handleSubmit
      }
      >
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Username
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.user
      }
          id="user"
          name="user"
          onChange={
        this.handleChangeUser
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Password:
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.pass
      }
          id="pass"
          name="pass"
          onChange={
        this.handleChangePass
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user: '',
      pass: '',
      check: '',
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassCheck = this.handlePassCheck.bind(this);
  }

  handlePassCheck(event) {
    this.setState({
      check: event.target.value,
    });
  }

  handleChangeUser(event) {
    this.setState({
      user: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePass(event) {
    this.setState({
      pass: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('Submitted!');
    const user = this.state.user;
    const email = this.state.email;
    const pass = this.state.pass;
    const check = this.state.check;
    if (pass === check) {
      axios.post('http://127.0.0.1:8081/signup',
        querystring.stringify({
          user: this.state.user,
          pass: this.state.pass,
          email: this.state.email,
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response);
      });
    } else {
      alert('Your passwords do not match');
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={
        this.handleSubmit
      }
      >
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Username:
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.user
      }
          id="user"
          name="user"
          onChange={
        this.handleChangeUser
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Email:
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.email
      }
          name="email"
          onChange={
        this.handleEmail
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Password:
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.pass
      }
          name="pass"
          type="password"
          onChange={
        this.handlePass
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <h1>
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
      Retype Password:
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }
          {' '}
          {
        ' '
      }

        </h1>
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        {
        ' '
      }
        {' '}
        <input
          value={
        this.state.check
      }
          name="check"
          type="password"
          onChange={
        this.handlePassCheck
      }
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
