import React from "react";

import Section from "./Section";
import splashImg from "../splash.png";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="Hero">
          <div className="HeroGroup">
            <h1>
              CNN Technology <br />
            </h1>
          </div>
        </div>

        <div id="contact">
          <Section
            height="500"
            image={splashImg}
            title="About"
            text="The technologies used in this website are HTML-5, CSS3, JavaScript, JSX, React JS, Redux, Node JS, Mongo DB, Express JS, Heroku, and Netlify. To get a copy of this codebase scroll down to latest news."
          />
        </div>
        <div id="contact">
          <Section
            height="500"
            image={splashImg}
            title="Privacy"
            text="CNN does not collect, sell, or store data."
          />
        </div>
        <div id="contact">
          <Section
            height="500"
            image={splashImg}
            title="Latest News"
            text="We are pleased to announce that you can look at the CSS code and replicate this idea/invention for free, just get a good coder tell him to look at the Card class. You can get all the free code you want in this github repo including examples of this code to sell items, is millions of dollars in clean bugless regression free code "
            url="https://github.com/hectorgomez74343?tab=repositories"
          />
        </div>
      </div>
    );
  }
}

export default IndexPage;
