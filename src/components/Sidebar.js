import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    // this.hashLinks = React.createRef()
    // this.hashActy = React.createRef()
    // this.hashInvolv = React.createRef()
    // this.accLinks = React.createRef()
    // this.accActy = React.createRef()
    // this.accInvolv = React.createRef()
    // this.persLinks = React.createRef()
    // this.persActy = React.createRef()
    // this.persAppr = React.createRef()
    // this.persInvolv = React.createRef()
    // this.compLinks = React.createRef()
    // this.compActy = React.createRef()
    // this.compInvolv = React.createRef()
    this.state = {
      showDropDown: [false, false, false, false],
    }
  }
  handleScrollToElement() {
    console.log('Clicca')
    // let tesNode = ReactDOM.findDOMNode(this.myRef)
    // let tesNode = this.myRef.current
    // console.log(tesNode)
    // switch (tesNode) {
    //   case ('AccActy'):
    //     window.scrollTo(0, tesNode.offsetTop);
    //     break;
    //   case ('HashActy'):
    //     window.scrollTo(1, tesNode.offsetTop);
    //     break;
    //   case ('ChorChart'):
    //     window.scrollTo(2, tesNode.offsetTop);
    //     break;
    //   default:
    //     console.log('non funziono');
    // }
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
                <li onClick={this.handleScrollToElement} ref={this.hashLinks}>
                  Links
                </li>
                <li onClick={this.handleScrollToElement} ref={this.hashActy}>
                  Activity
                </li>
                <li onClick={this.handleScrollToElement} ref={this.hashInvolv}>
                  Involvement
                </li>
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
                <li onClick={this.handleScrollToElement} ref={this.accLinks}>
                  Links
                </li>
                <li onClick={this.handleScrollToElement} ref={this.accActy}>
                  Activity
                </li>
                <li onClick={this.handleScrollToElement} ref={this.accInvolv}>
                  Involvement
                </li>
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
                <li onClick={this.handleScrollToElement} ref={this.persLinks}>
                  Links
                </li>
                <li onClick={this.handleScrollToElement} ref={this.persActy}>
                  Activity
                </li>
                <li onClick={this.handleScrollToElement} ref={this.persAppr}>
                  Approval
                </li>
                <li onClick={this.handleScrollToElement} ref={this.persInvolv}>
                  Involvement
                </li>
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
                <li onClick={this.handleScrollToElement} ref={this.compLinks}>
                  Links
                </li>
                <li onClick={this.handleScrollToElement} ref={this.compActy}>
                  Activity
                </li>
                <li onClick={this.handleScrollToElement} ref={this.compInvolv}>
                  Involvement
                </li>
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
