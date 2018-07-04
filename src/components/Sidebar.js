import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropDown: [false, false, false, false],
    }
  }

  dropDownMenu = number => {
    let showDropDown = this.state.showDropDown.slice()
    for (let i = 0; i < showDropDown.length; i++) {
      if (i === number) {
        showDropDown[i] = !showDropDown[i]
      } else {
        showDropDown[i] = false
      }
    }
    this.setState({
      showDropDown: showDropDown,
    })
  }

  render() {
    let ArrPos = this.state.showDropDown
    return (
      <div className="sidebar__container">
        <div className="sidebar_user">
          {/* <div className="fotoUser">{this.props.username[0]}</div>
         <h2>{this.props.username}</h2> */}
          <div className="logoLogin">
            <img className="stretch" src={require('../img/logoLogin.png')} />

            <Link className="userAlign" to="/login">
              <span className="userProp">Nome Utente</span>
            </Link>
          </div>
        </div>

        <ul>
          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/hashtags"
              onClick={() => this.dropDownMenu(0)}
            >
              <div className="sidebar__menu__link">
                <span>HASHTAGS</span>
                <span className={'arrow ' + (ArrPos[0] ? 'up' : 'down')} />
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
                <Link to="/hashtags/Activity">
                  <li>Activity</li>
                </Link>
                <Link to="/hashtags/Involvement">
                  <li>Involvement</li>
                </Link>
                <Link to="/hashtags/Approval">
                  <li>Approval</li>
                </Link>
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
                <span className={'arrow ' + (ArrPos[1] ? 'up' : 'down')} />
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
                <Link to="/Accounts/Activity">
                  <li>Activity</li>
                </Link>
                <Link to="/Accounts/Involvement">
                  <li>Involvement</li>
                </Link>
              </ul>
            ) : null}
          </li>

          <li>
            <NavLink
              className="LinkSide"
              activeClassName="active"
              to="/personality"
              onClick={() => this.dropDownMenu(2)}
            >
              <div className="sidebar__menu__link">
                <span> PERSONALITY</span>
                <span className={'arrow ' + (ArrPos[2] ? 'up' : 'down')} />
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

                <Link to="/Personality/Activity">
                  <li>Activity</li>
                </Link>
                <Link to="/Personality/Involvement">
                  <li>Involvement</li>
                </Link>
                <Link to="/Personality/Approval">
                  <li>Approval</li>
                </Link>
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
                <span className={'arrow ' + (ArrPos[3] ? 'up' : 'down')} />
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
                <Link to="/Competitors/Activity">
                  <li>Activity</li>
                </Link>
                <Link to="/Competitors/Involvement">
                  <li>Involvement</li>
                </Link>
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
