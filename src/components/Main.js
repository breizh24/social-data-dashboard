import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personalita from './Personalita.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'
import Grafico from './Grafico'
import Widget from './Widget.js'
import Home__CustomPieChart from './Home_CustomPieChart'
import Login from './Login'

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
                  <Home__CustomPieChart
                    title={'ACCOUNT ACTIVITY'}
                    version="155"
                    category="ma"
                    subCategory="trend"
                    social="twitter"
                    indicator="activity"
                  />
                </Widget>
                <Widget width="45%">
                  <Home__CustomPieChart
                    title={'HASHTAG ACTIVITY'}
                    version="156"
                    category="ht"
                    subCategory="trend"
                    social="twitter_hashtag"
                    indicator="activity"
                  />
                </Widget>
                <Widget width="95%">
                  <Grafico title={'TREND ACTIVITY ACCOUNTS'} />
                </Widget>
              </div>
            )}
          />
          <Route exact path="/login" render={props => <Hashtags />} />

          <Route exact path="/hashtags" render={props => <Hashtags />} />
          <Route exact path="/hashtags/graph1" render={props => <h1>Sei nel graph1</h1>} />
          <Route exact path="/hashtags/graph2" render={props => <h1>Sei nel graph2</h1>} />
          <Route exact path="/hashtags/graph3" render={props => <h1>Sei nel graph3</h1>} />

          <Route exact path="/accounts" render={props => <Accounts />} />
          <Route exact path="/accounts/graph1" render={props => <h1>Sei nel graph1</h1>} />
          <Route exact path="/accounts/graph2" render={props => <h1>Sei nel graph2</h1>} />
          <Route exact path="/accounts/graph3" render={props => <h1>Sei nel graph3</h1>} />

          <Route exact path="/personalita" render={props => <Personalita />} />
          <Route exact path="/personalita/graph1" render={props => <h1>Sei nel graph1</h1>} />
          <Route exact path="/personalita/graph2" render={props => <h1>Sei nel graph2</h1>} />
          <Route exact path="/personalita/graph3" render={props => <h1>Sei nel graph3</h1>} />

          <Route exact path="/competitors" render={props => <Competitors />} />
          <Route exact path="/competitors/graph1" render={props => <h1>Sei nel graph1</h1>} />
          <Route exact path="/competitors/graph2" render={props => <h1>Sei nel graph2</h1>} />
          <Route exact path="/competitors/graph3" render={props => <h1>Sei nel graph3</h1>} />

          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
