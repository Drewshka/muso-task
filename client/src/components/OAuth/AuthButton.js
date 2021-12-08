import React, { Component } from "react";
import axios from "axios";
const API_URL = "http://localhost:8080";

export default class AuthButton extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/check-auth`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        this.setState({
          isAuthenticated: true,
          user: res.data,
        });
      })
      .catch(() => {
        this.setState({
          isAuthenticated: false,
        });
      });
  }

  signOut = () => {
    const url = `${window.location.protocol}//${window.location.host}`;
    console.log(url);
    window.location = `${API_URL}/logout?from=${url}`;
    // this.setState({ user: null });
  };
  render() {
    return (
      this.state.isAuthenticated && (
        <p
          className="welcomeLogin"
          style={{
            fontSize: "small",
            position: "absolute",
            top: "2px",
            color: "#0d6efd",
          }}
        >
          <img
            height="25"
            src={this.state.user.photos[0].value}
            alt={this.state.user.displayName}
          />
          Welcome, {this.state.user.displayName}!{" "}
          <button onClick={this.signOut}>Sign out</button>
        </p>
      )
    );
  }
}
