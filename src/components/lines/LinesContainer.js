import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import { NavLink, Redirect } from 'react-router-dom'

import { fetchLines } from './linesActions'

const RenderLine = props => (
  <div>
    <h4>{R.toUpper(props.line)}</h4>
    <div className="row">
      <RenderForward position="lw" line={props.line} lines={props.lines} />
      <RenderForward position="c" line={props.line} lines={props.lines} />
      <RenderForward position="rw" line={props.line} lines={props.lines} />
    </div>
    <div className="row">
      <RenderDefender position="ld" line={props.line} lines={props.lines} />
      <RenderDefender position="rd" line={props.line} lines={props.lines} />
    </div>
  </div>
)

const RenderForward = props => (
  <div className="col-md-2 text-center">
    {R.toUpper(props.position)}{' '}
    <NavLink
      to={`/players/${R.path([props.line, props.position, 'id'], props.lines)}`}
      className="nav-link nav-item"
      activeClassName="active"
    >
      {R.path([props.line, props.position, 'name'], props.lines)}
    </NavLink>
  </div>
)

const RenderDefender = props => (
  <div className="col-md-3 text-center">
    {R.toUpper(props.position)}{' '}
    <NavLink
      to={`/players/${R.path([props.line, props.position, 'id'], props.lines)}`}
      className="nav-link nav-item"
      activeClassName="active"
    >
      {R.path([props.line, props.position, 'name'], props.lines)}
    </NavLink>
  </div>
)

const RenderList = props => {
  const name = props.name
  const list = R.path([props.type], props.lines)
  return (
    <div>
      <h4>{name}</h4>
      {list.map(p => <RenderPlayer key={p.name} player={p} />)}
    </div>
  )
}

const RenderPlayer = props => (
  <div className="row">
    <div className="col-md-1 text-right">{props.player.position}</div>
    <div className="col-md-2">
      <NavLink
        to={`/players/${props.player.id}`}
        className="nav-link nav-item"
        activeClassName="active"
      >
        {props.player.name}
      </NavLink>
    </div>
  </div>
)

const LinesContainer = props => (
  <div className="container">
    {props.lines &&
      !props.fetching && (
        <div>
          <h1>Parhaat ketjut</h1>
          <RenderLine line="y1" lines={props.lines} />
          <RenderLine line="y2" lines={props.lines} />
          <RenderLine line="y3" lines={props.lines} />
          <RenderLine line="y4" lines={props.lines} />
          <RenderLine line="j1" lines={props.lines} />
          <RenderLine line="j2" lines={props.lines} />
          <RenderLine line="j3" lines={props.lines} />
          <RenderList name="Maalivahdit" lines={props.lines} type="goalies" />
          <RenderList name="Myytävät" lines={props.lines} type="sell" />
          <RenderList name="Ylimääräiset" lines={props.lines} type="extra" />
        </div>
      )}
    {!props.loggedIn && <Redirect to="/" />}
  </div>
)

const mapStateToProps = state => ({
  lines: R.path(['lines', 'lines'], state),
  fetching: R.path(['lines', 'fetching'], state),
  loggedIn: R.path(['user', 'token'], state),
})

const mapDispatchToProps = dispatch => ({
  fetchLines: dispatch(fetchLines()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LinesContainer)
