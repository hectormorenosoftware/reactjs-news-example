import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import News from "./components/News";

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <News />} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
