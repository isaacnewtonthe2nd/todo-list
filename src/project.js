import { Task } from "./task";
import { ProjectLocalStorage, TaskLocalStorage, TodayTasksLocalStorage } from "./local-storage";
import { format } from "date-fns";

export const projects = [];
export const tasks = [];
const todayTasks = [];
filterOldTasks();
checkTodayTasks();

export class Project {
  constructor (title) {
    this.title = title;
    this.taskArr = [];
  }
 
 
  addTask (title, description = '', dueDate = '', priority = '') {
    const task = new Task (title, description, dueDate, priority);
    this.taskArr.push(task);
    tasks.push(task);
    TaskLocalStorage(tasks);
    ProjectLocalStorage(projects);
  }
 
 
  removeTask (index) {
    for (let i = 0; i < tasks.length; i++) {
      const currentTask = this.taskArr[index];
      if (currentTask.title === tasks[i].title) {
        tasks.splice(i, 1);
      }
    }
    this.taskArr.splice(index, 1);
    TaskLocalStorage(tasks);
    ProjectLocalStorage(projects);
  }
 }

export function addProject (title) {
  const project = new Project(title);
  projects.push(project);
  ProjectLocalStorage(projects);
}
 
export function removeProject (index) {
  projects.splice(index, 1);
  ProjectLocalStorage(projects);
}

function checkTodayTasks () {
  for (let i = 0; i < tasks.length; i++) {
    if (format (new Date(), 'PPPP') === format (new Date(tasks[i].dueDate), 'PPPP')) {
      todayTasks.push(tasks[i]);
    }
  }
  TodayTasksLocalStorage(todayTasks);
}

function filterOldTasks () {
  for (let i = 0; i < todayTasks.length; i++) {
    if (format (new Date(), 'PPPP') !== format (new Date(todayTasks[i].dueDate), 'PPPP')) {
      todayTasks.splice(i, 1);
    }
  }
  TodayTasksLocalStorage(todayTasks);
}