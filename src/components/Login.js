import React, { Component } from 'react'

class Login extends Component {
  onClickLogin = () => {
    if (this.props.username.length > 0) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="login__container">
        <div className="logo__h1__form__container">
          <img className="login__logo" />
          <img className="stretch" src={require('../img/logoLogin.png')} />
          <div className="login__form">
            <div className="login__input>">
              <input
                className="input__email"
                type="email"
                placeholder="Username"
                onChange={e => this.props.handleChangeLogin(e)}
              />
              <br />
              <input
                className="input__password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="button__container">
            <button className="login__button" onClick={this.onClickLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
