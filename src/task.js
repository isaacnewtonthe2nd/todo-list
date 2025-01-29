import { tasks, projects } from "./project";
import { TaskLocalStorage, ProjectLocalStorage } from "./local-storage";



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
  tasks.splice(index, 1);

  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].length; i++) {
      if (projects[i][j].title === tasks[index].title) {
        projects[i].splice(j, 1);
      }
    }
  }
  TaskLocalStorage(tasks);
  ProjectLocalStorage(projects);
}
