import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import { positions, Provider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const socket = io("http://localhost:8000");
function App() {
  const options = {
    timeout: 2000,
    position: positions.TOP_CENTER,
  };
  return (
    <Provider template={AlertTemplate} {...options}>
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
    </Provider>
  );
}

export default App;
