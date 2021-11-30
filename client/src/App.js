import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { Component } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GigsPage from "./pages/GigsPage/GigsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import EditGig from "./pages/EditGig/EditGig";

function App() {
  return (
    <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/:id" component={UsersPage} />
          <Route path="/gigs" exact component={GigsPage} />
          <Route path="/gigs/:id" component={GigsPage} />
          <Route path="/gigs/update" component={EditGig} />

          <Route path="/contact" component={ContactUsPage} />

          {/* <Route path="/:id" component={HomePage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
