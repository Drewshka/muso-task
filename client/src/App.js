import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GigsPage from "./pages/GigsPage/GigsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import EventsMap from "./pages/Map/Map";
import PrivateRoute from "./components/OAuth/PrivateRoute";
import AuthButton from "./components/OAuth/AuthButton";
import Login from "./components/OAuth/Login";
import PublicPage from "./components/OAuth/PublicPage";
import ProtectedPage from "./components/OAuth/ProtectedPage";

export const API_URL = "http://localhost:8080";

function App() {
  return (
    <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ul className="App__ul">
          <li className="App__ul-item">
            <Link to="/public" style={{ textDecoration: "none" }}>
              Public Page
            </Link>
          </li>
          <li className="App__ul-item">
            <Link to="/protected" style={{ textDecoration: "none" }}>
              Protected Page
            </Link>
          </li>
        </ul>
        <Header />
        <AuthButton />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/:id" component={UsersPage} />
          <Route path="/gigs" exact component={GigsPage} />
          <Route path="/gigs/:id" component={GigsPage} />
          <Route path="/map" component={EventsMap} />
          {/* <Route path="/contact" component={ContactUsPage} /> */}
        </Switch>
        <Route path="/login" component={Login} />
        <Route path="/public" component={PublicPage} />
        <PrivateRoute path="/protected" component={ProtectedPage} />
      </Router>
    </div>
  );
}

export default App;
