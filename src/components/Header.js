import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './Logo'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'DASHBOARD',
      currentLocation: ''
    }
  }
  componentDidMount() {
    let newTitle;
    let currentLocation = this.props.location.pathname
    switch (currentLocation) {
      case "/":
        newTitle = "DASHBOARD";
        break;
      case "/login":
        newTitle = "LOGIN";
        break;
      case "/hashtags":
        newTitle = "HASHTAGS";
        break;
      case "/accounts":
        newTitle = "ACCOUNTS";
        break;
      case "/personalita":
        newTitle = "PERSONALITÁ";
        break;
      case "/competitors":
        newTitle = "COMPETITORS";
        break;
    }
    this.setState({
      title: newTitle
    })
  }
  // componentShouldUpdate() {
  // }

  render() {
    return (
      <div className="header__container">
        <div className="header__logo__container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="title__container">
          <h1 className="titleMain"> {this.state.title} </h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
