import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="sidebar__logo__container">
          <NavLink className="LinkSide" to="/">
            <Logo />
          </NavLink>
        </div>
        <hr className="hr__logo" />
        <div className="sidebar_user">
          {/* <div className="fotoUser">{this.props.username[0]}</div>
         <h2>{this.props.username}</h2> */}
          <div className="logoLogin">
            <img className="stretch" src={require('../img/logoLogin.png')} />
            <NavLink to="/login">
              <span className="userProp">Nome Utente</span>
            </NavLink>
          </div>
        </div>
        <hr className="hr__sidebar" />
        <ul>
          <NavLink className="LinkSide" activeClassName="active" to="/hashtags">
            <li>HASHTAGS</li>
          </NavLink>
          <NavLink className="LinkSide" activeClassName="active" to="/accounts">
            <li>ACCOUNTS</li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/personalita"
          >
            <li>PERSONALITÀ</li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/competitors"
          >
            <li>COMPETITORS</li>
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Sidebar
