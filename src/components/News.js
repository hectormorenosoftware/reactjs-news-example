import React from "react";
import { withRouter } from "react-router-dom";

import Card from "./Card";
import data from "../data.json";
import MSNBCNEWSLOGO from "../images/msnbcnewslogo.png";

class News extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newsData: data.articles,
      keywordToSearchFor: "",
    };
  }

  onChangeInputOnSearchBar = (e) => {
    const { value } = e.target;
    const { newsData } = this.state;

    if (value === "tech news") {
      return this.setState({
        newsData: newsData.filter((article) => {
          return article.type === "tech news";
        }),
      });
    }

    if (value === "android news") {
      return this.setState({
        newsData: newsData.filter((articleType) => {
          return articleType.type === "android news";
        }),
      });
    }

    this.setState({
      newsData: data.articles,
    });
  };

  render() {
    const { newsData } = this.state;

    return (
      <div>
        <div className="new-flex-box">
          <img
            src={MSNBCNEWSLOGO}
            style={{ width: "170px", height: "120px" }}
          />
          <input
            className="searchForDataInputBar"
            type="text"
            placeholder="Search for android news or tech news."
            onChange={this.onChangeInputOnSearchBar}
          />
        </div>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            {newsData.map((article, index) => {
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
