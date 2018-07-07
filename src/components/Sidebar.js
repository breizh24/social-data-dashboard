import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Scroll from 'react-scroll-to-element'

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
                <Scroll type="id" element="HashNetw" offset={-60}>
                  <li>Network</li>
                </Scroll>
                <Scroll type="id" element="HashHier" offset={-60}>
                  <li>Hierarchy</li>
                </Scroll>
                <Scroll type="id" element="HashAct" offset={-60}>
                  <li>Activity</li>
                </Scroll>
                <Scroll type="id" element="HashInv" offset={-60}>
                  <li>Involvement</li>
                </Scroll>
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
                <Scroll type="id" element="ChorAcc" offset={-60}>
                  <li>Chord</li>
                </Scroll>
                <Scroll type="id" element="NetwAcc" offset={-60}>
                  <li>Network</li>
                </Scroll>
                <Scroll type="id" element="AccHier" offset={-60}>
                  <li>Hierarchy</li>
                </Scroll>
                <Scroll type="id" element="AccActy" offset={-60}>
                  <li>Activity</li>
                </Scroll>
                <Scroll type="id" element="AccInv" offset={-60}>
                  <li>Involvement</li>
                </Scroll>
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
                <Scroll type="id" element="ChorPers" offset={-60}>
                  <li>Chord</li>
                </Scroll>
                <Scroll type="id" element="NetwPers" offset={-60}>
                  <li>Network</li>
                </Scroll>
                <Scroll type="id" element="HierPers" offset={-60}>
                  <li>Hierarchy</li>
                </Scroll>
                <Scroll type="id" element="PersActy" offset={-60}>
                  <li>Activity</li>
                </Scroll>
                <Scroll type="id" element="PersApp" offset={-60}>
                  <li>Approval</li>
                </Scroll>
                <Scroll type="id" element="PersInv" offset={-60}>
                  <li>Involvement</li>
                </Scroll>
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
                <Scroll type="id" element="ChorComp" offset={-60}>
                  <li>Chord</li>
                </Scroll>
                <Scroll type="id" element="NetwComp" offset={-60}>
                  <li>Network</li>
                </Scroll>
                <Scroll type="id" element="CompHier" offset={-60}>
                  <li>Hierarchy</li>
                </Scroll>
                <Scroll type="id" element="CompActy" offset={-60}>
                  <li>Activity</li>
                </Scroll>
                <Scroll type="id" element="CompInv" offset={-60}>
                  <li>Involvement</li>
                </Scroll>
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
