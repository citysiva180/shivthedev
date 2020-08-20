import React from "react";
import python from "../assets/logos/python.png";
import reactjs from "../assets/logos/reactjs.png";
import aws from "../assets/logos/amazonWebServices.jpg";
import nodejs from "../assets/logos/nodejs.jpg";
import dotnet from "../assets/logos/dotnet.jpg";
import "../stylesheets/programming.css";

const Programming = () => {
  const cardInfo = [
    {
      image: python,
      title: "python",
      text: "Worked with Djang, PIP commands and Pandas",
    },
    { image: nodejs, title: "Node JS", text: "DS and Algo, and ECMA 2018" },
    {
      image: reactjs,
      title: "ReactJs",
      text: "Props,State,Hooks and Functional Components",
    },
    { image: aws, title: "AWS", text: "EC2,Workspaces and Amplify" },
    { image: dotnet, title: "C#", text: ".NET Core, WPF and MSSQL" },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card" key={card.index}>
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Programming Skills</h1>
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default Programming;
