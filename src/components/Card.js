import React from "react";

import click from "./audio/click.mp3";
import "./Card.css";

const Card = (props) => {
  function playAudio() {
    const audio = new Audio(click);
    audio.play();
  }

  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="Card" onClick={playAudio}>
        <img src={props.image} alt="hello-world" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
  );
};

export default Card;
