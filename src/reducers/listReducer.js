import { Get_Tasks, Task_Saved, Delete_Task } from '../actions/ActionTypes'

const INITIAL_STATE = {
  tasks: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Get_Tasks:
      return {
        ...state,
        tasks: action.tasks,
      }
    case Task_Saved:
    return {
        ...state,
        tasks: [...state.tasks, { id: action.payload.key, name: action.payload.name }]
      }
    case Delete_Task:
    return {
      ...state,
      tasks: action.tasks
    }
    default:
      return {
        ...state,
      }
  }
}
