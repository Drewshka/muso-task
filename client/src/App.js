import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
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

function App() {
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

export default App;
