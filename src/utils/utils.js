export const createArray = (tasks) => {
    return tasks && Object.keys(tasks).map(task => {
        return {
            id: task,
            name: tasks[task].name
        }
    });
}

export const getDate = (date) => {
    const dateObj = new Date(Number(date));
    return `${dateObj.getDate()}-${dateObj.getMonth()+1}-${dateObj.getFullYear()}`
}