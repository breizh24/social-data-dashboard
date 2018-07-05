import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
    }
  }

  onClickLogin = () => {
    // if (this.props.username.length > 0) {
    if (this.state.user.length > 0 && this.state.password.length > 0) {
      this.props.history.push('/')
    }
  }

  validateForm() {
    return this.state.user.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="user" bsSize="large">
            <ControlLabel>User</ControlLabel>
            <FormControl
              autoFocus
              type="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.onClickLogin}
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login

/*  <div className="login__container">
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
</div> */
