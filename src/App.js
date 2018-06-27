import React, { Component } from 'react'
import Main from './components/Main'
import Grafico from './components/Grafico'
import Logo from './components/Logo'
import './css/style.css'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <Main>
        <Logo />
        <Sidebar />
        <Grafico />
      </Main>
    )
  }
}

export default App
