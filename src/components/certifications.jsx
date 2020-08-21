import React from "react";

import "../stylesheets/certificate.css";

const Certificates = () => {
  const certificateInfo = [
    {
      title: "Python",
      text: "Completed this certfication in www.codewithmosh.com",
      updated: "December 2019",
    },

    {
      title: "Javascript",
      text: "Completed this certification in www.codewithmosh.com",
      updated: "March 2019",
    },
    {
      title: "ReactJs",
      text: "Completed this certification in www.pluralsight.com",
      updated: "May 2020",
    },

    {
      title: "Bootstrap",
      text: "Completed this certification in www.udemy.com",
      updated: "August 2020",
    },
  ];

  const renderCert = (card, index) => {
    return (
      <div class="card bg-white text-dark" key={card.index}>
        {/* <img src={nyc} class="card-img" alt="..." /> */}
        <div class="card-img-overlay">
          <h5 class="card-title">{card.title}</h5>
          <i class="fas fa-award w-100"></i>
          <p class="card-text">{card.text}</p>
          <p class="card-text">
            <b>{card.updated}</b>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="certificate">
      <div className="container">
        <h1>Certifications</h1>
        {certificateInfo.map(renderCert)}
      </div>
    </div>
  );
};

export default Certificates;
