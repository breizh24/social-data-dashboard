import React, { Component } from 'react'
import './css/style.css'
import Main from './components/Main'
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
import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        <Sidebar />
        <Main />
      </div>
    )
  }
}

export default App
