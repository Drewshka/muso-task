import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { Component } from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Router onUpdate={() => window.scrollTo(0, 0)}> */}
      <Header />
      {/* <Switch> */}
      {/* <Route path="/upload" exact component={VideoUpload} />
          <Route path="/" exact component={HomePage} />
          <Route path="/:id" component={HomePage} /> */}
      {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
