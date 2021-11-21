import "./App.css";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/Post">
            <Post />
          </Route>
          <Route path="/About">
            <About/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;