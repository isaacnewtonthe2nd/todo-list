export class Task {
  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
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