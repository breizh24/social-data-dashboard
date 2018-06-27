import React, { Component } from 'react'
import Hashtags from "./Hashtags.js"
import Personalità from "./Personalità.js"
import Competitors from "./Competitors.js"
import Accounts from "./Accounts.js"
import Grafico from "./Grafico.js"
import { Link, Route, Switch, } from 'react-router-dom';
import NotFound from "./NotFound.js";
import Landing from "./Landing"

class Main extends Component {
  render() {
    return (
      <div className="main__container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Landing />

            )}
          />
          <Route
            path="/hashtags"
            render={props => (
              <Hashtags />
            )}
          />

          <Route
            path="/acconuts"
            render={props => (
              <Accounts />
            )}
          />

          <Route
            path="/personalità"
            render={props => (
              <Personalità />
            )}
          />

          <Route
            path="/competitors"
            render={props => (
              <Competitors />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        {this.props.children}
      </div>
    )
  }
}

export default Main
