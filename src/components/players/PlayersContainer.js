import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

import { fetchPlayers } from './playersActions'
import { plus } from '../shared/images'

const Player = props => {
  const player = props.player
  return (
    <tr>
      <td>
        <NavLink
          to={`/players/${player.id}`}
          className="nav-link nav-item"
          activeClassName="active"
        >
          {player.name}
        </NavLink>
        {player.status === 'NEW' && <img alt="new" src={plus} />}
      </td>
      <td className="text-center">{player.age}</td>
      <td className="text-center">{player.quality}</td>
      <td className="text-center">{player.potential}</td>
      <td className="text-center">{player.goalie}</td>
      <td className="text-center">{player.defence}</td>
      <td className="text-center">{player.attack}</td>
      <td className="text-center">{player.shooting}</td>
      <td className="text-center">{player.passing}</td>
      <td className="text-center">{player.speed}</td>
      <td className="text-center">{player.strength}</td>
      <td className="text-center">{player.selfControl}</td>
      <td className="text-center">{player.form}</td>
      <td className="text-center">{player.experience}</td>
      <td className="text-center">{player.abilityIndex}</td>
      <td className="text-center">{player.weeks}</td>
      <td className="text-center">{player.growthPotential}</td>
      <td className="text-center">{player.efficiency}</td>
    </tr>
  )
}

const ThWithButton = props => (
  <th className={props.className}>
    <button
      className="btn btn-link"
      onClick={() =>
        props.updatePlayers({
          sort: props.sort,
          newSortColumn: props.newSortColumn,
        })}
      disabled={props.sortColumn === props.newSortColumn}
    >
      {props.label}
    </button>
  </th>
)

const PlayersContainer = props => (
  <div className="container">
    <h1>Pelaajat ({props.players.length})</h1>
    <table className="table table-condensed table-striped smaller custom-table">
      <thead>
        <tr>
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="name,asc"
            label="Nimi"
            sortColumn={props.sortColumn}
            newSortColumn="name"
            className="col-md-2"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.age,asc"
            label="Ikä"
            sortColumn={props.sortColumn}
            newSortColumn="age"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.quality,desc"
            label="Lah"
            sortColumn={props.sortColumn}
            newSortColumn="quality"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.potential,desc"
            label="Pot"
            sortColumn={props.sortColumn}
            newSortColumn="potential"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.goalie,desc"
            label="MV"
            sortColumn={props.sortColumn}
            newSortColumn="goalie"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.defence,desc"
            label="Puo"
            sortColumn={props.sortColumn}
            newSortColumn="defence"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.attack,desc"
            label="Hyö"
            sortColumn={props.sortColumn}
            newSortColumn="attack"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.shooting,desc"
            label="Lau"
            sortColumn={props.sortColumn}
            newSortColumn="shooting"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.passing,desc"
            label="Syö"
            sortColumn={props.sortColumn}
            newSortColumn="passing"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.speed,desc"
            label="Nop"
            sortColumn={props.sortColumn}
            newSortColumn="speed"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.strength,desc"
            label="Voi"
            sortColumn={props.sortColumn}
            newSortColumn="strength"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.selfControl,desc"
            label="Ihi"
            sortColumn={props.sortColumn}
            newSortColumn="selfControl"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.form,desc"
            label="Kun"
            sortColumn={props.sortColumn}
            newSortColumn="form"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.experience,desc"
            label="Kok"
            sortColumn={props.sortColumn}
            newSortColumn="experience"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.abilityIndex,desc"
            label="TI"
            sortColumn={props.sortColumn}
            newSortColumn="abilityIndex"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.weeks,desc"
            label="Viikot"
            sortColumn={props.sortColumn}
            newSortColumn="weeks"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.growthPotential,desc"
            label="Kasvunvara"
            sortColumn={props.sortColumn}
            newSortColumn="growthPotential"
          />
          <ThWithButton
            updatePlayers={props.updatePlayers}
            sort="latestData.efficiency,desc"
            label="Tehokkuus"
            sortColumn={props.sortColumn}
            newSortColumn="efficiency"
          />
        </tr>
      </thead>
      <tbody>{props.players.map(p => <Player key={p.name} player={p} />)}</tbody>
    </table>
    {!props.loggedIn && <Redirect to="/" />}
  </div>
)

const mapStateToProps = state => ({
  players: R.pathOr([], ['players', 'players'], state),
  sortColumn: R.path(['players', 'sortColumn'], state),
  token: R.path(['user', 'token'], state),
  loggedIn: R.path(['user', 'token'], state),
})

const mapDispatchToProps = dispatch => ({
  getPlayers: dispatch(
    fetchPlayers({
      sort: 'name,asc',
      newSortColumn: 'name',
    }),
  ),
  updatePlayers: params => dispatch(fetchPlayers(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)
