import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import Master from "./Components/Master";
import Player from "./Components/Player";
import Spectator from "./Components/Spectator";
import Game from "./Components/Game";
import "./Sass/App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/master" component={Master} />
      <Route path="/player" component={Player} />
      <Route path="/spectator" component={Spectator} />
      <Route path="/game" component={Game} />
    </Router>
  );
};

export default App;
