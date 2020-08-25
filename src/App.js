import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Home from "./components/Home";
import portfolio from "./components/portfolio";
import contact from "./components/contactMe";
import article from "./components/article";
import Navbar from "./utilities/Nabar";
import Footer from "./utilities/footer";
import Loading from "../src/components/loading";
import "./App.css";
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>

        <Switch>
          <Suspense fallback={<Loading></Loading>}>
            <Route path="/" exact component={Home}></Route>
            <Redirect path="/home" exact to="/" component={Home}></Redirect>
            <Route path="/portfolio" component={portfolio}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/article" component={article}></Route>
            <Footer></Footer>
          </Suspense>
          <Redirect path="/" exact to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
