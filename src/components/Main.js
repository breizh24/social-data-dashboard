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

import AccountActivity from './AccountActivity.js';
import AccountInvolvement from './AccountInvolvement.js';
import Personality_AccountActivity from './Personality_AccountActivity.js';
import Personality_AccountInvolvement from './Personality_AccountInvolvement.js';
import Personality_AccountApproval from './Personality_AccountApproval.js';
import Competitor_AccountActivity from './Competitor_AccountActivity.js';
import Competitor_AccountInvolvement from './Competitor_AccountInvolvement.js';
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
                <Widget width="95%">
                  <Grafico title={'TREND ACTIVITY ACCOUNTS'} />
                </Widget>
              </div>
            )}
          />

          <Route path="/hashtags" render={props => <Hashtags />} />

          <Route path="/accounts" render={props => (
            <div className="container_account_element">
              <Widget width="90%">
                <AccountActivity

                  title={'ACCOUNT ACTIVITY'}
                  version="155"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="activity"
                />
              </Widget>
              <Widget width="90%">
                <AccountInvolvement
                  title={'ACCOUNT INVOLVEMENT'}
                  version="158"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="involvement"
                />
              </Widget>
            </div>

          )} />

          <Route path="/personalita" render={props => (
            <div className="container_personality_element">
              <Widget width="90%">
                <Personality_AccountActivity
                  title={'PERSONALITY ACTIVITY'}
                  version="V170"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="activity"
                />
              </Widget>
              <Widget width="90%">
                <Personality_AccountInvolvement
                  title={'PERSONALITY INVOLVEMENT'}
                  version="V160"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="involvement"
                />
              </Widget>
              <Widget width="90%">
                <Personality_AccountApproval
                  title={'PERSONALITY APPROVAL'}
                  version="V160"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="approval"
                />
              </Widget>
            </div>

          )} />



          <Route path="/competitors" render={props => (
            <div className="container_competitor_element">
              <Widget width="90%">
                <Competitor_AccountActivity
                  title={'COMPETITOR ACTIVITY'}
                  version="V158"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="activity"
                />
              </Widget>
              <Widget width="90%">
                <Competitor_AccountInvolvement
                  title={'COMPETITOR INVOLVEMENT'}
                  version="V158"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="involvement"
                />
              </Widget>
            </div>

          )} />


          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
