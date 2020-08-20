import React, { Component } from "react";
import "../stylesheets/home.css";
import Introduction from "../components/intro";

import shiv from "../assets/shivthedev.png";
import shiv1 from "../assets/shivthedev1.png";
import shiv2 from "../assets/shivthedev3.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        {/* Carousel */}
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-caption d-md-block">
                <p>FullStack Developer</p>
                <h5>MERN AND PYTHON</h5>
              </div>
              <img src={shiv} class="d-none d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-md-block">
                <p>Tech Evangelist</p>
                <h5>Blogger / Mediam</h5>
              </div>
              <img src={shiv1} class="d-none d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-md-block">
                <p>App Designer</p>
                <h5>ReactNative and Sketch</h5>
              </div>
              <img src={shiv2} class="d-none d-block w-100" alt="..." />
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

        <div className="container">
          <div className="RoleData">
            <Introduction></Introduction>
          </div>
          <div className="ProgrammingLanguage">
            <h1>Programming Languages known</h1>
          </div>
          <div className="Certifications">
            <h1>Certfications</h1>
          </div>
          <div className="Experience">
            <h1>Work Experience</h1>
          </div>
          <div className="Education">
            <h1>Education</h1>
          </div>
          <div className="Qoutes">
            <h1>Aspirational Note</h1>
          </div>

          {/* footer starts here */}
        </div>
      </div>
    );
  }
}

export default Home;
