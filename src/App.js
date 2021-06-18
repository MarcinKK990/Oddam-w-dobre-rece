import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
