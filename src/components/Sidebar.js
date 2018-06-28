import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
          <NavLink className="LinkSide" to="/">
            <Logo />
          </NavLink>
        </div>
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

        <hr />
        <ul>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/hashtags"
            onClick={() => this.dropDownMenu(0)}
          >
            <li>
              <div className="sidebar__menu__link">
                <span>HASHTAGS</span> <span>></span>
              </div>
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
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/accounts"
            onClick={() => this.dropDownMenu(1)}
          >
            <li>
              <div className="sidebar__menu__link">
                <span>ACCOUNTS</span>
                <span>></span>
              </div>
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
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/personalita"
            onClick={() => this.dropDownMenu(2)}
          >
            <li>
              <div className="sidebar__menu__link">
                <span> PERSONALITÀ</span>
                <span>></span>
              </div>
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
            </li>
          </NavLink>
          <NavLink
            className="LinkSide"
            activeClassName="active"
            to="/competitors"
            onClick={() => this.dropDownMenu(3)}
          >
            <li>
              <div className="sidebar__menu__link">
                <span>COMPETITORS</span>
                <span>></span>
              </div>
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
            </li>
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Sidebar
