import React, { Component } from 'react'
import Widget from './components/Widget'
import Grafico from './components/Grafico'
import './css/style.css'

class App extends Component {
  render() {
    return (
      <Widget title="Prova">
        <Grafico />
      </Widget>
    )
  }
}

export default App
