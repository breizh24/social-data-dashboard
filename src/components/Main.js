import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personalita from './Personalita.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'
import Grafico from './Grafico'
import Widget from './Widget.js'
import Home_Piechart from './Home__PieChart'

class Main extends Component {
  render() {
    return (
      <div className="main__container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="container__home__element">
                <Widget width="45%">
                  <Home_Piechart
                    title={'ACCOUNT ACTIVITY'}
                    version="155"
                    category="ma"
                    subCategory="trend"
                    social="twitter"
                    indicator="activity"
                  />
                </Widget>
                <Widget width="45%">
                  <Home_Piechart
                    title={'HASHTAG ACTIVITY'}
                    version="156"
                    category="ht"
                    subCategory="trend"
                    social="twitter_hashtag"
                    indicator="activity"
                  />
                </Widget>
              </div>
            )}
          />
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
