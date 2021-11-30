import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GigsPage from "./pages/GigsPage/GigsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import PrivateRoute from "./components/OAuth/PrivateRoute";
import AuthButton from "./components/OAuth/AuthButton";
import Login from "./components/OAuth/Login";
import PublicPage from "./components/OAuth/PublicPage";
import ProtectedPage from "./components/OAuth/ProtectedPage";
// import Profile from "./pages/Profile/Profile";
// import axios from "axios";

export const API_URL = "http://localhost:8080";

// const baseUrl = "http://localhost:8080";
// const loginUrl = `${baseUrl}/login`;
// const signupUrl = `${baseUrl}/signup`;

// function App() {
class App extends Component {
  // state = {
  //   isSignedUp: false,
  //   isLoggedIn: false,
  //   isLoginError: false,
  //   errorMessage: "",
  // };

  // login = (e) => {
  //   e.preventDefault();

  //   console.log(e.target);

  //   axios
  //     .post(loginUrl, {
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //       // name: e.target.name.value,
  //     })
  //     .then((response) => {
  //       sessionStorage.setItem("token", response.data.token);
  //       this.setState({ isLoggedIn: true });
  //     })
  //     .catch((error) => {
  //       this.setState({ errorMessage: error.message });
  //     });
  // };

  // signup = (e) => {
  //   e.preventDefault();

  //   console.log(e.target);

  //   axios
  //     .post(signupUrl, {
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //       name: e.target.name.value,
  //     })
  //     .then((response) => {
  //       sessionStorage.setItem("token", response.data.token);
  //       this.setState({ isSignedUp: true });
  //     })
  //     .catch((error) => {
  //       this.setState({ errorMessage: error.message });
  //     });
  // };

  // renderSignUp() {
  //   return (
  //     <div>
  //       <h1>SignUp</h1>
  //       <form onSubmit={this.signup}>
  //         <div className="form-group">
  //           Username: <input type="text" name="username" defaultValue="" />
  //         </div>
  //         <div className="form-group">
  //           Name: <input type="text" name="name" defaultValue="" />
  //         </div>
  //         <div className="form-group">
  //           Password: <input type="password" name="password" defaultValue="" />
  //         </div>
  //         <button className="btn btn-primary" type="submit">
  //           Signup
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }

  // renderLogin = () => {
  //   const { isLoginError, errorMessage } = this.state;
  //   return (
  //     <div>
  //       <h1>Login</h1>
  //       {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
  //       <form onSubmit={this.login}>
  //         <div className="form-group">
  //           Username: <input type="text" name="username" />
  //         </div>
  //         <div className="form-group">
  //           Password: <input type="password" name="password" />
  //         </div>
  //         <button className="btn btn-primary" type="submit">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };

  render() {
    // const { isLoggedIn, isSignedUp } = this.state;

    // //* Handle the Signup/Login
    // if (!isSignedUp) return this.renderSignUp();
    // if (!isLoggedIn) return this.renderLogin();

    return (
      <div className="App">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
              {/* <Profile /> */}
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
              <Header />
            </li>
          </ul>
          <AuthButton />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" exact component={UsersPage} />
            <Route path="/users/:id" component={UsersPage} />
            <Route path="/gigs" exact component={GigsPage} />
            <Route path="/gigs/:id" component={GigsPage} />
            <Route path="/contact" component={ContactUsPage} />
          </Switch>
          <Route path="/login" component={Login} />
          <Route path="/public" component={PublicPage} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </Router>
      </div>
    );
  }
}

export default App;
