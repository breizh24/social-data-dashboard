import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personality from './Personality.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'
import HomeCustomPieChart from './Home_CustomPieChart'
import Login from './Login'
import ChordchartComponent from './ChordchartComponent'

class Main extends Component {
  handleScrollToElement(event) {
    // const tesNode = ReactDOM.findDOMNode(this.refs.test)
    // console.log(tesNode)
    // switch (testNode) {
    // case ('AccActy'):
    // window.scrollTo(0, tesNode.offsetTop);
    // break;
    // case ('HashActy'):
    // window.scrollTo(1, tesNode.offsetTop);
    // break;
  }

  render() {
    return (
      <div onScroll={this.handleScrollToElement} className="main__container">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/home"
            render={() => (
              <div className="container__home__element">
                <HomeCustomPieChart
                  title={'ACCOUNT ACTIVITY'}
                  version="155"
                  category="ma"
                  subCategory="trend"
                  social="twitter"
                  indicator="activity"
                  width="45%"
                />

                <HomeCustomPieChart
                  title={'HASHTAG ACTIVITY'}
                  version="156"
                  category="ht"
                  subCategory="trend"
                  social="twitter_hashtag"
                  indicator="activity"
                  width="45%"
                />

                <ChordchartComponent
                  ref="ChorChart"
                  version="160"
                  category="ma"
                  subCategory="chord"
                  social="twitter"
                  indicator="/"
                  limit="100"
                  title="Personality Chord"
                  width="50%"
                />
                <ChordchartComponent
                  ref="ChorChart"
                  version="155"
                  category="ma"
                  subCategory="chord"
                  social="twitter"
                  indicator="/"
                  limit="100"
                  title="Accounts Chord"
                  width="50%"
                />
              </div>
            )}
          />

          <Route exact path="/hashtags" render={props => <Hashtags />} />

          <Route path="/accounts" render={props => <Accounts />} />

          <Route path="/personality" render={props => <Personality />} />

          <Route path="/competitors" render={props => <Competitors />} />

          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
