import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

import ImportForm from './ImportForm'
import { importPlayers } from './importActions'

const ImportContainer = props => (
  <div className="container">
    <h1>Tuonti</h1>
    <ImportForm onSubmit={props.sendCookie} />
    {props.text && <h4>{props.text}</h4>}
  </div>
)

const mapStateToProps = state => ({
  text: R.pathOr('', ['import', 'text'], state),
  loggedIn: R.path(['user', 'token'], state),
})

const mapDispatchToProps = dispatch => ({
  sendCookie: params => dispatch(importPlayers(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportContainer)
