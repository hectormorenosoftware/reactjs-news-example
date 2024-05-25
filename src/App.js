import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import News from "./components/News";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <News />} />
        <Route exact path="/info" render={() => <IndexPage />} />
      </Switch>
    );
  }
}

export default withRouter(App);
