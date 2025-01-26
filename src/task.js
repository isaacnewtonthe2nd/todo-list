import { tasks } from "./project";
import { TaskLocalStorage } from "./local-storage";

export class Task {
  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
 
 
  set editTitle (value) {
    if (this.title === value && value === '') {
      return;
    }
    this.title = value;
  };
 
 
  set editDescription (value) {
    this.description = value;
  }
 
 
  set editDueDate (value) {
    this.dueDate = value;
  }
 
 
  set editPriority (value) {
    this.priority = value;
  }
}
 
export function addTask (title, description = '', dueDate = '', priority = '') {
  const task = new Task (title, description, dueDate, priority);
  tasks.push(task);
  TaskLocalStorage(tasks);
}


export function removeTask (index) {
  for (let i = 0; i < tasks.length; i++) {
    const currentTask = this.taskArr[index];
    if (currentTask.title === tasks[i].title) {
      tasks.splice(i, 1);
    }
  }
  TaskLocalStorage(tasks);
}