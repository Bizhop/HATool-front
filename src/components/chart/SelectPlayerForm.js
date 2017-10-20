import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { RenderSelectInput } from '../shared/FormInput'

const playersDropdown = players => players.map(p => ({ name: p.name, value: p.id }))

const SelectPlayerForm = props => (
  <div className="row">
    <div className="col-md-4">
      <form>
        <Field
          name="player"
          label="Pelaaja"
          type="select"
          component={RenderSelectInput}
          options={playersDropdown(props.players)}
          onChange={(e, newValue) => props.fetchPlayer(newValue)}
        />
      </form>
    </div>
  </div>
)

export default reduxForm({ form: 'selectPlayerForm' })(SelectPlayerForm)
