import React, { Component } from 'react'
import './css/style.css'
import Main from './components/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
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
