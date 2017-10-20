import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { RenderSelectInput, RenderTextInput } from '../shared/FormInput'

const positionList = [
  { name: 'G', value: 'G' },
  { name: 'D', value: 'D' },
  { name: 'C', value: 'C' },
  { name: 'W', value: 'W' },
]

const statusList = [
  { name: 'MV', value: 'MV' },
  { name: 'Y1P', value: 'Y1P' },
  { name: 'Y2', value: 'Y2' },
  { name: 'Y3', value: 'Y3' },
  { name: 'Y4J', value: 'Y4J' },
  { name: 'J', value: 'J' },
  { name: 'USC', value: 'USC' },
  { name: 'SELL', value: 'SELL' },
  { name: 'NEW', value: 'NEW' },
]

const UpdatePlayerForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="row">
      <div className="col-md-2">
        <Field
          name="position"
          label="Pelipaikka"
          type="select"
          component={RenderSelectInput}
          options={positionList}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <Field
          name="status"
          label="Status"
          type="select"
          component={RenderSelectInput}
          options={statusList}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <Field name="loyalty" label="Uskollisuus" type="text" component={RenderTextInput} />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Päivitä tiedot
    </button>
  </form>
)

export default reduxForm({ form: 'updatePlayerForm' })(UpdatePlayerForm)
