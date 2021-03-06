import React, { Component } from "react";
import "../stylesheets/home.css";
import Introduction from "../components/intro";
import Programming from "../components/programming";
import Certificates from "../components/certifications";
import Experience from "../components/experience";
import Education from "../components/education";
import Tweets from "../components/recentTweets";
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
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-md-block">
                <p>FullStack Developer</p>
                <h5>MERN AND PYTHON</h5>
              </div>
              <img src={shiv} className="d-none d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-md-block">
                <p>Tech Evangelist</p>
                <h5>Blogger / Mediam</h5>
              </div>
              <img src={shiv1} className="d-none d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-md-block">
                <p>App Designer</p>
                <h5>ReactNative and Sketch</h5>
              </div>
              <img src={shiv2} className="d-none d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="RoleData">
          <Introduction></Introduction>
        </div>
        <div className="ProgrammingLanguage">
          <Programming></Programming>
        </div>
        <div className="Certifications">
          <Certificates></Certificates>
        </div>
        <div className="Experience">
          <Experience></Experience>
        </div>
        <div className="Education">
          <Education></Education>
        </div>
        <div className="Tweets">
          <Tweets></Tweets>
        </div>

        {/* footer starts here */}
      </div>
    );
  }
}

export default Home;
