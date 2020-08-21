import React from "react";
import python from "../assets/logos/python.jpg";
import reactjs from "../assets/logos/reactjs.png";
import aws from "../assets/logos/aws.png";
import nodejs from "../assets/logos/nodejs.jpg";
import dotnet from "../assets/logos/dotnet.png";
import javascript from "../assets/logos/javaScript.png";
import bootstrap from "../assets/logos/bootstrap.png";
import sql from "../assets/logos/MySQL.png";
// import java from "../assets/logos/java_final.png";
import "../stylesheets/programming.css";

const Programming = () => {
  const cardInfo = [
    {
      image: python,
      title: "Python",
      text: "Worked with Django MVT and Pandas",
    },
    { image: nodejs, title: "Node JS", text: "Worked with Timeout Module" },
    {
      image: javascript,
      title: "Javascript",
      text: "ECMA 2018 and Arrow Functions",
    },
    {
      image: reactjs,
      title: "ReactJs",
      text: "Worked with Redux and ReactNative",
    },
    { image: aws, title: "AWS", text: "EC2, Workspaces and Amplify" },
    { image: dotnet, title: ".NET CORE", text: "Worked with WPF and MSSQL" },

    {
      image: bootstrap,
      title: "Bootstrap",
      text: "Flex, Grid System and Breakpoints",
    },
    // {
    //   image: java,
    //   title: "Java",
    //   text: "Core Java, EJB, Struts and DS",
    // },
    {
      image: sql,
      title: "My SQL",
      text: "Relational DBs and Concurrencies",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card" key={card.index}>
        <img src={card.image} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Skills that I adore</h1>
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default Programming;
