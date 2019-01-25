import { Get_Tasks, Delete_Task } from './ActionTypes'
import { getTasks, removeTask } from '../services/localStorage'
import { createArray } from '../utils/utils'

export const getAllTasks = () => {
  const tasks = getTasks()
  const taskArray = createArray(tasks)
  return {
    type: Get_Tasks,
    tasks: taskArray,
  }
}

const updateList = tasks => {
  return {
    type: Delete_Task,
    tasks,
  }
}

export const deleteTask = id => (dispatch, getState) => {
  removeTask(id)
  const tasks = getState().listState.tasks.filter(task => task.id !== id)
  dispatch(updateList(tasks))
}
