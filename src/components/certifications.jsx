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
      <div className="card bg-white text-dark" key={index}>
        {/* <img src={nyc} className="card-img" alt="..." /> */}
        <div className="card-img-overlay">
          <h5 className="card-title">{card.title}</h5>
          <i className="fas fa-award w-100"></i>
          <p className="card-text">{card.text}</p>
          <p className="card-text">
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
