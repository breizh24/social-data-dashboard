import React, { Component } from 'react'
import Main from './components/Main'
import Grafico from './components/Grafico'
import Logo from './components/Logo'
import './css/style.css'

class App extends Component {
  render() {
    return (
      <Main>
        <Logo />
        <Grafico />
      </Main>
    )
  }
}

export default App
