import React, { Component } from 'react'
import './css/style.css'
import Main from './components/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        <Sidebar />
        <Main>
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App
