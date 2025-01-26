import { Task } from "./task";

export const projects = [];
export const tasks = [];

export class Project {
  constructor (title) {
    this.title = title;
    this.taskArr = [];
  }
 
 
  addTask (title, description = '', dueDate = '', priority = '') {
    const task = new Task (title, description, dueDate, priority);
    this.taskArr.push(task);
    tasks.push(task);
  }
 
 
  removeTask (index) {
    for (let i = 0; i < tasks.length; i++) {
      const currentTask = this.taskArr[index];
      if (currentTask.title === tasks[i].title) {
        tasks.splice(i, 1);
      }
    }
    this.taskArr.splice(index, 1);
  }
 }

export function addProject (title) {
  const project = new Project(title);
  projects.push(project);
}
 
export function removeProject (index) {
  projects.splice(index, 1);
}