import React, { Component } from "react";

const API_URL = "http://localhost:8080";

export default class Login extends Component {
  login = () => {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    console.log(from);
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    console.log(url);
    window.location = `${API_URL}/login/?from=${url}`;
  };
  render() {
    return (
      <div>
        <p>You must log in to view the page.</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
