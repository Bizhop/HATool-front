import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { RenderTextInput } from '../shared/FormInput'

const ImportForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="row">
      <div className="col-md-12">
        <Field name="cookie" label="Cookie" type="text" component={RenderTextInput} />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Lähetä cookie
    </button>
  </form>
)

export default reduxForm({ form: 'importForm' })(ImportForm)
