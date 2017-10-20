import R from 'ramda'

import { TOGGLE_FILTER } from './chartActions'

const initialState = {
  filters: [],
  checkboxes: [
    'goalie',
    'defence',
    'attack',
    'shooting',
    'passing',
    'speed',
    'strength',
    'selfControl',
    'abilityIndex',
    'form',
    'experience',
    'weeks',
    'efficiency',
    'growthPotential',
  ],
}

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: R.contains(action.name, state.filters)
          ? R.reject(R.equals(action.name), state.filters)
          : R.append(action.name, state.filters),
      }
    default:
      return state
  }
}

export default chartReducer
