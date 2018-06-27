import React, { Component } from 'react'
import Main from './components/Main'
import Grafico from './components/Grafico'
import './css/style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        <Sidebar />
        <Main>
          <Grafico />
        </Main>
      </div>
    )
  }
}

export default App
