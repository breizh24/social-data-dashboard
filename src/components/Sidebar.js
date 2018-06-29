import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../components/Logo'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropDown: [false, false, false, false],
    }
  }

  dropDownMenu = number => {
    let showDropDown = this.state.showDropDown.slice()
    showDropDown[number] = !showDropDown[number]
    this.setState(
      {
        showDropDown: showDropDown,
      },
      () => console.log(this.state.showDropDown),
    )
  }

  render() {
    return (
      <div className="sidebar__container">
        <div className="sidebar__logo__container">
          <Link className="LinkSide" to="/">
            <Logo />
          </Link>
        </div>
        <div className="sidebar_user">
          {/* <div className="fotoUser">{this.props.username[0]}</div>
         <h2>{this.props.username}</h2> */}
          <div className="logoLogin">
            <img className="stretch" src={require('../img/logoLogin.png')} />
            <Link to="/login">
              <span className="userProp">Nome Utente</span>
            </Link>
          </div>
        </div>

        <hr />
        <ul>
          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/hashtags"
              onClick={() => this.dropDownMenu(0)}
            >
              <div className="sidebar__menu__link">
                <span>HASHTAGS</span> <span>></span>
              </div>
            </NavLink>
            {this.state.showDropDown[0] ? (
              <ul
                className={
                  this.state.showDropDown[0]
                    ? 'dropdown sidebar__dropdown__show'
                    : 'dropdown sidebar__dropdown__hide'
                }
              >
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            ) : null}
          </li>

          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/accounts"
              onClick={() => this.dropDownMenu(1)}
            >
              <div className="sidebar__menu__link">
                <span>ACCOUNTS</span>
                <span>></span>
              </div>
            </NavLink>
            {this.state.showDropDown[1] ? (
              <ul
                className={
                  this.state.showDropDown[1]
                    ? 'dropdown sidebar__dropdown__show'
                    : 'dropdown sidebar__dropdown__hide'
                }
              >
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            ) : null}
          </li>

          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/personalita"
              onClick={() => this.dropDownMenu(2)}
            >
              <div className="sidebar__menu__link">
                <span> PERSONALITÀ</span>
                <span>></span>
              </div>
            </NavLink>
            {this.state.showDropDown[2] ? (
              <ul
                className={
                  this.state.showDropDown[2]
                    ? 'dropdown sidebar__dropdown__show'
                    : 'dropdown sidebar__dropdown__hide'
                }
              >
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            ) : null}
          </li>

          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/competitors"
              onClick={() => this.dropDownMenu(3)}
            >
              <div className="sidebar__menu__link">
                <span>COMPETITORS</span>
                <span>></span>
              </div>
            </NavLink>
            {this.state.showDropDown[3] ? (
              <ul
                className={
                  this.state.showDropDown[3]
                    ? 'dropdown sidebar__dropdown__show'
                    : 'dropdown sidebar__dropdown__hide'
                }
              >
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
