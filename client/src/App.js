import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GigsPage from "./pages/GigsPage/GigsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
// import axios from "axios";
// import Map from "../src/components/Map/Map";

// function App() {
class App extends Component {
  state = {
    incidents: [],
  };

  // async componentDidMount() {
  //   const res = await axios.get(
  //     "https://data.sfgov.org/resource/wr8u-xric.json",
  //     {
  //       params: {
  //         $limit: 500,
  //         $$app_token: YOUR_APP_TOKEN,
  //       },
  //     }
  //   );
  //   const incidents = res.data;
  //   this.setState({ incidents: incidents });
  // }

  render() {
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
            <Route path="/contact" component={ContactUsPage} />

            {/* <Route path="/:id" component={HomePage} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
