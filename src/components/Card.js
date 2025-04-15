import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="Card">
        <img src={props.image} alt="hello-world" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
  );
};

export default Card;
