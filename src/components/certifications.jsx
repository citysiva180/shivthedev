import React from "react";
import nyc from "../assets/NYC.jpg";
import "../stylesheets/certificate.css";

const Certificates = () => {
  return (
    <div className="container">
      <h1>Certificates</h1>
      <div className="certificate">
        <div class="card bg-white text-dark">
          {/* <img src={nyc} class="card-img" alt="..." /> */}
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
