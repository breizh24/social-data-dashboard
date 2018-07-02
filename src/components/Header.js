import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './Logo'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      currentLocation: this.props.location.pathname,
    }
  }

  componentDidMount() {
    let location = this.props.location.pathname
    this.showTitle(location)
  }

  showTitle() {
    let currentLocation = this.props.location.pathname
    switch (currentLocation) {
      case '/':
        return 'DASHBOARD'
      case '/personalita':
        return 'PERSONALITÀ'
      default:
        return currentLocation.slice(1).toUpperCase()
    }
  }

  render() {
    const title = this.showTitle()
    return (
      <div className="header__container">
        <div className="header__logo__container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="title__container">
          <h1 className="titleMain"> {title} </h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
