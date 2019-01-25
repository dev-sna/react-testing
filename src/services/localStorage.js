export const save = (key, name) => {
  let tasks = getTasks()
  tasks = {
    ...tasks,
    [key]: {
      name,
    },
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'))
}

export const removeTask = (id) => {
  const tasks = getTasks();
  delete tasks[id];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}