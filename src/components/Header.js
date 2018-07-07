import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './Logo'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      currentLocation: this.props.location.pathname,
      user: [this.props.user],
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
      case '/personality':
        return 'PERSONALITY'
      default:
        return currentLocation.slice(1).toUpperCase()
    }
  }

  render() {
    const title = this.showTitle()

    return (
      <div className="header__container">
        <div className="header__logo__container">
          <div className="header__logo">
            <Link to="/home">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="title__container">
          <h1 className="titleMain"> {title} </h1>
        </div>
        <div className="logoLogin">
          <div className="userQuadrato">
            <h3>F</h3>
            {/* {this.state.user[0]}*/}
          </div>

          <span className="userProp">
            <Link className="userAlign" to="/login">
              Federica Bottura
              {/* {this.state.user} */}
            </Link>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
