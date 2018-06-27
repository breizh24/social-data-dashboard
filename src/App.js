import React, { Component } from 'react'
import './css/style.css'
import Main from './components/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        <Sidebar />
        <Main>
        </Main>
      </div>
    )
  }
}

export default App
