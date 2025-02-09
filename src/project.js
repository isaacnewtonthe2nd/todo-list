import { Task } from './task';

export class Project {
  constructor(title) {
    this.title = title;
    this.taskArr = [];
  }
}

// Projects modification
export function ProjectsFactory(inputProject) {
  const addProject = (title) => {
    const project = new Project(title);
    inputProject.push(project);
    localStorage.setItem('projects', JSON.stringify(inputProject));
  };

  const removeProject = (index) => {
    inputProject.splice(index, 1);
  };

  const addTask = (
    project,
    title,
    description = '',
    dueDate = '',
    priority = '',
  ) => {
    const task = new Task(title, description, dueDate, priority);
    project.taskArr.push(task);
    // inputTasks.push(task);
  };

  const removeTask = (project, index) => {
    project.taskArr.splice(index, 1);
  };

  return { addProject, removeProject, addTask, removeTask };
}
