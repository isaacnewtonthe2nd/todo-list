import { renderSidebar } from "./sidebarDOM";
import { renderMainContainer } from "./mainContainerDOM";
import { ProjectsFactory } from "./project";

export function renderDialogForm (inputProject) {
  // Dialog Selectors
  const projectDialog = document.querySelector('#add-project-dialog');
  const projectDialogForm = document.querySelector('#add-project-form');
  const closeProjectDialog = document.querySelector('#project-dialog-close');

  closeProjectDialog.addEventListener('click', (event) => { //Close Project Dialog
    event.preventDefault();
    projectDialog.close();
  });

  const taskDialog = document.querySelector('#add-task-dialog');
  const taskDialogForm = document.querySelector('#add-task-form');
  const closeTaskDialog = document.querySelector('#task-dialog-close');

  closeTaskDialog.addEventListener('click', (event) => { //Close Task Dialog
    event.preventDefault();
    taskDialog.close();
  })

  // Add Project Form Dialog Interactivity
  projectDialogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const projectTitle = document.querySelector('#project-title');

    projectDialog.close();
    ProjectsFactory(inputProject).addProject(projectTitle.value);
    renderSidebar(inputProject);
    renderMainContainer().getProjectDisplay(inputProject, inputProject[inputProject.length - 1], inputProject.length - 1);
    projectTitle.value = '';
  });

  // Add Task Form Dialog Interactivity
  taskDialogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTitle = document.querySelector('#task-title');
    const taskDescription = document.querySelector('#task-description');
    const taskDate = document.querySelector('#task-date');
    const taskPriority = document.querySelector('#task-priority');
    const addProjectSubscript = document.querySelector('#add-proj-subscript');

    taskDialog.close();
    ProjectsFactory(inputProject).addTask(inputProject[addProjectSubscript.value], taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value);
    renderSidebar(inputProject);
    renderMainContainer().getProjectDisplay(inputProject, inputProject[addProjectSubscript.value], addProjectSubscript.value);
    localStorage.setItem("projects", JSON.stringify(inputProject));
    taskTitle.value = '';
    taskDescription.value = '';
    taskDate.value = '';
    taskPriority.value = '';
  })
}

// This edits the tasks in projects and allTasks

export function editTaskDialog (inputProject) {
  const taskDialog = document.querySelector('#edit-task-dialog');
  const taskDialogForm = document.querySelector('#edit-task-form');
  const closeTaskDialog = document.querySelector('#edit-task-dialog-close');

  closeTaskDialog.addEventListener('click', (event) => {
    event.preventDefault();
    taskDialog.close();
  })

  taskDialogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTaskTitle = document.querySelector('#edit-task-title');
    const newTaskDescription = document.querySelector('#edit-task-description');
    const newTaskDate = document.querySelector('#edit-task-date');
    const newTaskPriority = document.querySelector('#edit-task-priority');
    const projectSubscript = document.querySelector('#proj-subscript');
    const taskSubscript = document.querySelector('#task-subscript');

    let checkProjectSubscript = false;
    let taskLocation;

    for (let i = 0; i < inputProject.length; i++) {
      if (projectSubscript.value === inputProject[i].title) {
        taskLocation = inputProject[i].taskArr[taskSubscript.value];
        checkProjectSubscript = true;
      }
    }
    
    if (!checkProjectSubscript) {
      taskLocation = inputProject[projectSubscript.value].taskArr[taskSubscript.value];
    }

    taskDialog.close();

    taskLocation.title = newTaskTitle.value;
    taskLocation.description = newTaskDescription.value;
    taskLocation.dueDate = newTaskDate.value;
    taskLocation.priority = newTaskPriority.value;

    localStorage.setItem("projects", JSON.stringify(inputProject));

    renderSidebar(inputProject);
    renderMainContainer().getAllTasksDisplay(inputProject);

    newTaskTitle.value = '';
    newTaskDescription.textContent = '';
    newTaskDate.value = '';
    newTaskPriority.value = '';
    projectSubscript.value = '';
    taskSubscript.value = '';
  })
}