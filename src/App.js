import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import portfolio from "./components/portfolio";
import contact from "./components/contactMe";
import article from "./components/article";
import Navbar from "./utilities/Nabar";
import Footer from "./utilities/footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect path="/" exact to="/"></Redirect>
          <Route path="/portfolio" component={portfolio}></Route>
          <Route path="/contact" component={contact}></Route>
          <Route path="/article" component={article}></Route>
          <Redirect path="/home" exact to="/" component={Home}></Redirect>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
