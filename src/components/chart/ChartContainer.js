import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
import R from 'ramda'
import { Redirect } from 'react-router-dom'

import { fetchPlayer } from '../player/playerActions'
import { fetchPlayers } from '../players/playersActions'
import { toggleFilter } from './chartActions'
import SelectPlayerForm from './SelectPlayerForm'

const CustomLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-5} dx={-12} fill={stroke} fontSize={10} textAnchor="middle">
    {value}
  </text>
)

const colors = ['red', 'green', 'blue', 'black', 'grey', 'violet', 'orange', 'brown']

const fi = {
  goalie: 'MV',
  defence: 'Puo',
  attack: 'Hyö',
  shooting: 'Lau',
  passing: 'Syö',
  speed: 'Nop',
  strength: 'Voi',
  selfControl: 'Ihi',
  abilityIndex: 'TI',
  form: 'Kun',
  experience: 'Kok',
  efficiency: 'Teho',
}

const RenderCheckboxes = props => (
  <form>
    {props.checkboxes &&
      props.checkboxes.map(c => (
        <RenderCheckbox
          key={c}
          name={c}
          toggleFilter={props.toggleFilter}
          filters={props.filters}
        />
      ))}
  </form>
)

const RenderCheckbox = props => (
  <label className="checkbox-inline smaller" htmlFor={props.name}>
    <input
      name={props.name}
      type="checkbox"
      onChange={() => props.toggleFilter(props.name)}
      checked={R.contains(props.name, props.filters)}
    />{' '}
    {R.propOr('', props.name, fi)}
  </label>
)

const ChartContainer = props => (
  <div className="container">
    <SelectPlayerForm players={props.players} fetchPlayer={props.fetchPlayer} />
    <RenderCheckboxes
      filters={props.filters}
      checkboxes={props.checkboxes}
      toggleFilter={props.toggleFilter}
    />
    {props.player && (
      <div>
        <h1>{`${props.player.status} ${props.player.position} ${props.player.name} (${props.player
          .quality}/${props.player.potential})`}</h1>
        <LineChart
          width={1024}
          height={600}
          data={R.sortBy(R.prop('createdAt'), props.player.data)}
        >
          <XAxis dataKey="createdAt" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Tooltip />
          {props.filters &&
            props.filters.map((f, idx) => (
              <Line
                key={f}
                type="monotone"
                dataKey={f}
                name={R.propOr('', f, fi)}
                label={<CustomLabel />}
                isAnimationActive={false}
                stroke={colors[idx]}
              />
            ))}
        </LineChart>
      </div>
    )}
    {!props.loggedIn && <Redirect to="/" />}
  </div>
)

const mapStateToProps = state => ({
  player: R.path(['player', 'player'], state),
  players: R.pathOr([], ['players', 'players'], state),
  loggedIn: R.path(['user', 'token'], state),
  filters: R.path(['chart', 'filters'], state),
  checkboxes: R.path(['chart', 'checkboxes'], state),
})

const mapDispatchToProps = dispatch => ({
  getPlayers: dispatch(
    fetchPlayers({
      sort: 'name,asc',
      newSortColumn: 'name',
    }),
  ),
  fetchPlayer: id => dispatch(fetchPlayer(id)),
  toggleFilter: name => dispatch(toggleFilter(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
