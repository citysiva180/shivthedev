import React, { Component } from "react";
import Siva from "../assets/siva.jpg";
import "../stylesheets/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            Welcome to my humble website to explore and brainstorm endless Tech!
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-outline-light btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
