import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8080";

class PrivateRoute extends Component {
  state = {
    isAuthenticating: true,
    isAuthenticated: false,
    user: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/check-auth`, { withCredentials: true })
      .then((res) => {
        this.setState({
          isAuthenticating: false,
          isAuthenticated: true,
          user: res.data,
        });
      })
      .catch(() => {
        this.setState({
          isAuthenticating: false,
          isAuthenticated: false,
        });
      });
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (this.state.isAuthenticating) return null;
          return this.state.isAuthenticated ? (
            <Component user={this.state.user} {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    );
  }
}

export default PrivateRoute;
