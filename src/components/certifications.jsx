import React from "react";
import nyc from "../assets/NYC.jpg";
import "../stylesheets/certificate.css";

const Certificates = () => {
  return (
    <div className="certificate">
      <div className="container">
        <h1>Certificates</h1>
        <div class="card bg-white text-dark">
          {/* <img src={nyc} class="card-img" alt="..." /> */}
          <div class="card-img-overlay">
            <h5 class="card-title">Basics in JavaScript</h5>
            <i class="fas fa-award"></i>
            <p class="card-text">
              <b></b>
              Certification done through www.codewithmosh.com. Completed object
              oriented and regular Javascript.
            </p>
            <p class="card-text">
              <b>Received : March 2018</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
