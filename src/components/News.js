import React from "react";
import { withRouter } from "react-router-dom";

import Card from "./Card";
import data from "../data.json";
import CNNLogo from "../images/cnnlogo.png";

class News extends React.PureComponent {
  render() {
    const { articles } = data;

    return (
      <div>
        <div className="new-flex-box">
          <img
            src={CNNLogo}
            style={{ width: "70px", height: "70px", padding: "25px" }}
          />
        </div>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            {articles.map((article, index) => {
              return (
                <Card
                  key={index}
                  title={article.title}
                  text="Click or tap to read more"
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
