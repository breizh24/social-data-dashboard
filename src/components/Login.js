import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

import isEmail from 'validator/lib/isEmail'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      listaPersone: [],
      emailErrorMessage: '',
      password: '',
      email: '',
      passwordErrorMessage: '',
      disabledButton: true,
    }
  }

  onPasswordChange = e => {
    const newState = { ...this.state.infoPersona }
    newState.password = e.target.value
    if (
      newState.password.length < 6 ||
      (newState.email && !isEmail(newState.email))
    ) {
      this.setState({
        passwordErrorMessage: 'Minimo 6 caratteri',
      })
    } else if (newState.password.length >= 6) {
      this.setState({
        password: e.target.value,
        passwordErrorMessage: '',
      })
    }
  }

  onEmailChange = e => {
    const newState = { ...this.state.infoPersona }
    newState.email = e.target.value

    if (newState.email && !isEmail(newState.email)) {
      this.setState({
        emailErrorMessage: 'Email non valida',
      })
    } else if (newState.email && isEmail(newState.email)) {
      this.setState({
        email: e.target.value,
        emailErrorMessage: '',
      })
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.password === '') {
      this.setState({
        passwordErrorMessage: 'Campo obbligatorio!',
      })
    } else if (this.state.password) {
      this.setState({
        passwordErrorMessage: '',
        disabledButton: false,
      })
    } else {
      return
    }
  }

  render() {
    return (
      <div id="login">
        <div className="form__intro">
          <div className="intro__logo" />
          <form autoComplete="false" className="form">
            <div className="intro__body">
              <div className="intro__title">Login</div>
              <input
                type="text"
                placeholder="Nome utente"
                name="nomeutente"
                className="intro__input"
                value={this.state.user}
                // onChange={this.onEmailChange}
              />
              <span className="intro__input__messaggio__errore">
                {this.state.emailErrorMessage}
              </span>
              <input
                type="password"
                placeholder="Password (minimo 6 caratteri)"
                className="intro__input"
                name="password"
                onChange={this.onPasswordChange}
              />
              <span className="intro__input__messaggio__errore">
                {this.state.passwordErrorMessage}
              </span>
              <button className="intro__btn" onClick={this.handleLogin}>
                Accedi
              </button>
              {this.state.password !== '' &&
              this.state.disabledButton === false ? (
                <Redirect to="/home" />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
