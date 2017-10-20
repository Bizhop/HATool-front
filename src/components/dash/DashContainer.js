import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

import { login } from '../user/userActions'

const responseGoogle = response => {
  console.log(response)
}

const DashContainer = props => (
  <div className="container">
    <h1>Etusivu</h1>
    {!props.loggedIn && (
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Kirjaudu sisään"
        className="btn btn-danger"
        onSuccess={props.login}
        onFailure={responseGoogle}
      />
    )}
  </div>
)

const mapStateToProps = state => ({
  loggedIn: R.path(['user', 'token'], state),
})

const mapDispatchToProps = dispatch => ({
  login: response => dispatch(login(response)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashContainer)
