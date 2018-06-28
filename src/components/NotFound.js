import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class NotFound extends Component {
  render() {
    return (
      <div className="e__404__container">
        <div className="e__404__text">
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to="/">Ritorna alla home</Link>
        </div>
      </div>
    )
  }
}

export default NotFound
