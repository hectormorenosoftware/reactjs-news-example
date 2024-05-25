import React from "react";
import { withRouter } from "react-router-dom";

import Card from "./Card";
import data from "../data.json";
import song from "./audio/ocean.mp3";

class News extends React.PureComponent {
  render() {
    const { articles } = data;

    return (
      <div>
        <audio autoPlay>
          <source src={song} type="audio/mp3" />
        </audio>
        <div className="new-flex-box">
          <h1 className="news-app-title">CNN Technology</h1>
        </div>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            {articles.map((article, index) => {
              return (
                <Card
                  key={index}
                  title={article.title}
                  text="Click to see more"
                  image={article.urlToImage}
                  url={article.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(News);
