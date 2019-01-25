import { Field_Change, Task_Saved, Reset_Form } from './ActionTypes'
import { save } from '../services/localStorage'

export const onFieldChange = (name, value) => {
  return {
    type: Field_Change,
    payload: {
      name,
      value,
    },
  }
}

export const resetForm = () => {
  return {
    type: Reset_Form,
  }
}

export const eventSaved = (key, name) => {
  return {
    type: Task_Saved,
    payload: {
      key,
      name,
    },
  }
}

export const saveTask = name => dispatch => {
  const key = Date.now()
  save(key, name)
  dispatch(resetForm())
  dispatch(eventSaved(key, name))
}
