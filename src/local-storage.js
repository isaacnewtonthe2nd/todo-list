export function ProjectLocalStorage (value) {
  const projectsString = JSON.stringify(value);
  localStorage.setItem("projects", projectsString);

  const getProjects  = () => {
    return JSON.parse(localStorage.getItem("projects"));
  }

  return { getProjects }
}

export function TaskLocalStorage (value) {
  const tasksString = JSON.stringify(value);
  localStorage.setItem("tasks", tasksString);

  const getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  return { getTasks }
}

export function TodayTasksLocalStorage (value) {
  const todayTasksString = JSON.stringify(value);
  localStorage.setItem("todayTasks", todayTasksString);

  const getTodayTasks = () => {
    return JSON.parse(localStorage.getItem("todayTasks"));
  }

  return { getTodayTasks }
}