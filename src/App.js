import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import portfolio from "./components/portfolio";
import contact from "./components/contactMe";
import article from "./components/article";
import Navbar from "./utilities/Nabar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <div className="container-fluid">
            <Route path="/" exact component={Home}></Route>
            <Route path="/portfolio" exact component={portfolio}></Route>
            <Route path="/contact" exact component={contact}></Route>
            <Route path="/article" exact component={article}></Route>
            <Redirect path="/" exact to="/"></Redirect>
            <Redirect path="/home" exact component={Home}></Redirect>
          </div>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
