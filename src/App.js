import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
const socket = io("http://localhost:8000");
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome socket={socket} />
        </Route>

        <Route path="/code/:roomname/:username">
          <Home socket={socket} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
