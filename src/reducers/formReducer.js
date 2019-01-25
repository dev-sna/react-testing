import { Field_Change, Reset_Form } from '../actions/ActionTypes'

const INITIAL_STATE = {
  taskName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Field_Change:
      return {
        [action.payload.name]: action.payload.value,
      }
    case Reset_Form:
      return {
        ...state,
        taskName: '',
      }
    default:
      return {
        ...state,
      }
  }
}
