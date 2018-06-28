import React, { Component } from 'react'
import Main from './components/Main'
import Grafico from './components/Grafico'
import './css/style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import AccountActivity from './components/AccountActivity'
import AccountInvolvement from './components/AccountInvolvement';
import Personality_AccountInvolvement from './components/Personality_AccountInvolvement';
import Personality_AccountActivity from './components/Personality_AccountActivity';
import Personality_AccountApproval from './components/Personality_AccountApproval';
import Competitor_AccountActivity from './components/Competitor_AccountActivity';
import Competitor_AccountInvolvement from './components/Competitor_AccountInvolvement';

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        <Sidebar />
        <Main>
          <Grafico />
          <h1> MAIN ACCOUNT </h1>
          <h2> Account Activity</h2>
          <AccountActivity />
          <h2> Account involvement </h2>
          <AccountInvolvement />
          <h1> PERSONALITY </h1>
          <h2> Personality account involvement </h2>
          <Personality_AccountInvolvement />
          <h2> Personality account activity </h2>
          <Personality_AccountActivity />
          <h2> Personality account approval </h2>
          <Personality_AccountApproval />
          <h1> COMPETITORS </h1>
          <h2> Competitor account activity </h2>
          <Competitor_AccountActivity/>
          <h2> Competitor account involvement </h2>
          <Competitor_AccountInvolvement/>

        </Main>
      </div>
    )
  }
}

export default App
