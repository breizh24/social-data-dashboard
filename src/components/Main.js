import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personalita from './Personalita.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'
import Grafico from './Grafico'
import Widget from './Widget.js'

class Main extends Component {
  render() {
    return (
      <div className="main__container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Widget>
                <Grafico />
              </Widget>
            )}
          />
          <Route path="/login" render={props => <Grafico />} />

          <Route path="/hashtags" render={props => <Hashtags />} />

          <Route path="/accounts" render={props => <Accounts />} />

          <Route path="/personalita" render={props => <Personalita />} />

          <Route path="/competitors" render={props => <Competitors />} />
          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
