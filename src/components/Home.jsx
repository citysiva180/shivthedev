import React, { Component } from "react";
import "../stylesheets/home.css";
import nyc from "../assets/NYC.jpg";
import logo from "../assets/developer.jpg";
import shiv from "../assets/shivthedev.JPG";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={nyc} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={logo} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={shiv} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
