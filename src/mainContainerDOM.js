import { format } from "date-fns";
import { renderSidebar } from "./sidebarDOM";
import { ProjectsFactory } from "./project";


export function renderMainContainer () {
  const main = document.querySelector('#main');

  const mainContainer = document.querySelector('#main-cont');
  mainContainer.textContent = '';

  // Add Task Dialog Selector
  const addTaskDialog = document.querySelector('#add-task-dialog');
  const addProjectSubscript = document.querySelector('#add-proj-subscript');

  // Edit Task Dialog Selector
  const taskDialog = document.querySelector('#edit-task-dialog');
  const editTaskTitle = document.querySelector('#edit-task-title');
  const editTaskDescription = document.querySelector('#edit-task-description');
  const editTaskDueDate = document.querySelector('#edit-task-date');
  const editTaskPriority = document.querySelector('#edit-task-priority');
  const projectSubscript = document.querySelector('#proj-subscript');
  const tasksSubscript = document.querySelector('#task-subscript');


  // T O D A Y   B U T T O N   D I S P L A Y
  const getTodayDisplay = (inputProjects) => {  
    mainContainer.textContent = '';

    // Today Header
    const todayHeader = document.createElement('div');
    todayHeader.classList.add('main-cont-header');

    const todayHeaderText = document.createElement('p');
    todayHeaderText.textContent = 'Today';
    todayHeader.appendChild(todayHeaderText);
    mainContainer.appendChild(todayHeader); 

    // Displays the Tasks due during the current day
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    for (let i = 0; i < inputProjects.length; i++) {
      for (let j = 0; j < inputProjects[i].taskArr.length; j++) {
        if (format (new Date(), 'PPPP') === format (new Date(inputProjects[i].taskArr[j].dueDate), 'PPPP')) {
          const taskContainer = document.createElement('div');
          taskContainer.classList.add('task-container');

          const taskContent = document.createElement('div');
          taskContent.classList.add('task-content');
          
          const taskCheckbox = document.createElement('input');
          taskCheckbox.setAttribute('type', 'checkbox');
          taskContent.appendChild(taskCheckbox);

          const taskInfo = document.createElement('div');
          taskInfo.classList.add('task-info');
          const taskTitle = document.createElement('p');
          taskTitle.textContent = inputProjects[i].taskArr[j].title;

          if (inputProjects[i].taskArr[j].checked == true)  {
            taskTitle.classList.add('completed');
          }

          taskInfo.appendChild(taskTitle);
          const taskDescription = document.createElement('p');
          if (inputProjects[i].taskArr[j].description !== '') {
            taskDescription.textContent = inputProjects[i].taskArr[j].description;
            taskDescription.classList.add('date');

            if (inputProjects[i].taskArr[j].checked == true)  {
              taskDescription.classList.add('completed');
            }

            taskInfo.appendChild(taskDescription);
          }
          const taskDate = document.createElement('p');
          taskDate.textContent = format (new Date(`${inputProjects[i].taskArr[j].dueDate}`), 'PPPP');
          taskDate.classList.add('date');

          if (inputProjects[i].taskArr[j].checked == true)  {
            taskDate.classList.add('completed');
          }

          taskInfo.appendChild(taskDate);
          taskContent.appendChild(taskInfo);
          taskContainer.appendChild(taskContent);

          console.log(inputProjects[i].taskArr[j]);
          taskCheckbox.addEventListener('change', () => {
            if (inputProjects[i].taskArr[j].checked == false) {
              inputProjects[i].taskArr[j].checked = true;
              taskCheckbox.setAttribute('checked', '');
              // projectTaskLocation.checked = true;
              renderMainContainer().getTodayDisplay(inputProjects);
              localStorage.setItem("projects", JSON.stringify(inputProjects));
            } else {
              inputProjects[i].taskArr[j].checked = false;
              taskCheckbox.removeAttribute('checked');
              // projectTaskLocation.checked = true;
              renderMainContainer().getTodayDisplay(inputProjects);
              localStorage.setItem("projects", JSON.stringify(inputProjects));
            }
            console.log(inputProjects[i].taskArr[j].checked);
          })

          //Lets You Edit the Task Content
          const editContent = document.createElement('div');
          editContent.classList.add('edit-content');

          if (inputProjects[i].taskArr[j].priority === 'p1' || inputProjects[i].taskArr[j].priority === 'P1') {
            const priorityIcon = document.createElement('div');
            priorityIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>flag</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" fill="#ff7c48"/></svg>`;
            editContent.appendChild(priorityIcon);
          }
          taskContainer.appendChild(editContent);
          tasksContainer.appendChild(taskContainer);
          mainContainer.appendChild(tasksContainer);
        }
      }
    }
  }


  // A L L   T A S K S   B U T T O N   D I S P L A Y
  const getAllTasksDisplay = (inputProjects) => {
    mainContainer.textContent = '';

    // All Tasks Header
    const allTasksHeader = document.createElement('div');
    allTasksHeader.classList.add('main-cont-header');

    const allTasksHeaderText = document.createElement('p');
    allTasksHeaderText.textContent = 'All Tasks';
    allTasksHeader.appendChild(allTasksHeaderText);
    mainContainer.appendChild(allTasksHeader); 

    // Displays all Tasks from all projects
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    for (let i = 0; i < inputProjects.length; i++) {
      for (let j = 0; j < inputProjects[i].taskArr.length; j++) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
        taskContent.appendChild(taskCheckbox);

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
        const taskTitle = document.createElement('p');
        taskTitle.textContent = inputProjects[i].taskArr[j].title;

        if (inputProjects[i].taskArr[j].checked == true)  {
          taskTitle.classList.add('completed');
        }

        taskInfo.appendChild(taskTitle);
        const taskDescription = document.createElement('p');
        if (inputProjects[i].taskArr[j].description !== '') {
          taskDescription.textContent = inputProjects[i].taskArr[j].description;
          taskDescription.classList.add('date');

          if (inputProjects[i].taskArr[j].checked == true)  {
            taskDescription.classList.add('completed');
          }

          taskInfo.appendChild(taskDescription);
        }
        const taskDate = document.createElement('p');
        taskDate.textContent = format (new Date(inputProjects[i].taskArr[j].dueDate), 'PPPP');
        taskDate.classList.add('date');
        if (inputProjects[i].taskArr[j].checked == true)  {
          taskDate.classList.add('completed');
        }
        taskInfo.appendChild(taskDate);
        taskContent.appendChild(taskInfo);
        taskContainer.appendChild(taskContent);

        taskCheckbox.addEventListener('change', () => {
          if (inputProjects[i].taskArr[j].checked == false) {
            inputProjects[i].taskArr[j].checked = true;
            renderMainContainer().getAllTasksDisplay(inputProjects);
            localStorage.setItem("projects", JSON.stringify(inputProjects));
          } else {
            inputProjects[i].taskArr[j].checked = false;
            renderMainContainer().getAllTasksDisplay(inputProjects);
            localStorage.setItem("projects", JSON.stringify(inputProjects));
          }
        })

        //Lets You Edit the Task Content
        const editContent = document.createElement('div');
        editContent.classList.add('edit-content');
        const editIcon = document.createElement('div');
        editIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>file-edit-outline</title><path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" /></svg>`;
        editIcon.classList.add('icon');

        editIcon.addEventListener('click', () => {
          editTaskTitle.value = `${inputProjects[i].taskArr[j].title}`;
          editTaskDescription.textContent = inputProjects[i].taskArr[j].description;
          editTaskDueDate.value = `${inputProjects[i].taskArr[j].dueDate}`;
          editTaskPriority.value = `${inputProjects[i].taskArr[j].priority}`;
          projectSubscript.value = `${i}`;
          tasksSubscript.value = `${j}`;
          taskDialog.showModal();
        })

        editContent.appendChild(editIcon);

        // Lets you delete tasks in the all Tasks page.
        const deleteIcon = document.createElement('div');
        deleteIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
        deleteIcon.classList.add('icon');

        deleteIcon.addEventListener('click', () => {
          ProjectsFactory(inputProjects).removeTask(inputProjects[i], j);
          localStorage.setItem("projects", JSON.stringify(inputProjects));
          renderMainContainer().getAllTasksDisplay(inputProjects);
        });

        editContent.appendChild(deleteIcon);

        if (inputProjects[i].taskArr[j].priority === 'p1' || inputProjects[i].taskArr[j].priority === 'P1') {
          const priorityIcon = document.createElement('div');
          priorityIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>flag</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" fill="#ff7c48"/></svg>`;
          editContent.appendChild(priorityIcon);
        }
        taskContainer.appendChild(editContent);
        tasksContainer.appendChild(taskContainer);
        mainContainer.appendChild(tasksContainer);
      }
    }
  }


  // M Y    P R O J E C T S   B U T T O N   D I S P L A Y
  const getProjectDisplay = (inputProjects, project, index) => {
    mainContainer.textContent = '';

    //Project Title/Header
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('main-cont-header');
    const projectHeaderText = document.createElement('p');
    projectHeaderText.textContent = project.title;
    projectHeader.appendChild(projectHeaderText);
    mainContainer.appendChild(projectHeader); 

    // Displays the Tasks for each Project
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    for (let i = 0; i < (project.taskArr).length; i++) {
      const taskContainer = document.createElement('div');
      taskContainer.classList.add('task-container');

      const taskContent = document.createElement('div');
      taskContent.classList.add('task-content');
      const taskCheckbox = document.createElement('input');
      taskCheckbox.setAttribute('type', 'checkbox');
      taskContent.appendChild(taskCheckbox);

      const taskInfo = document.createElement('div');
      taskInfo.classList.add('task-info');
      const taskTitle = document.createElement('p');
      taskTitle.textContent = project.taskArr[i].title;

      if (project.taskArr[i].checked == true)  {
        taskTitle.classList.add('completed');
      }

      taskInfo.appendChild(taskTitle);
      const taskDescription = document.createElement('p');
      if (project.taskArr[i].description !== '') {
        taskDescription.textContent = project.taskArr[i].description;
        taskDescription.classList.add('date');

        if (project.taskArr[i].checked == true)  {
          taskDescription.classList.add('completed');
        }

        taskInfo.appendChild(taskDescription);
      }
      const taskDate = document.createElement('p');
      taskDate.textContent = format (new Date(`${project.taskArr[i].dueDate}`), 'PPPP');
      taskDate.classList.add('date');

      if (project.taskArr[i].checked == true)  {
        taskDate.classList.add('completed');
      }

      taskInfo.appendChild(taskDate);
      taskContent.appendChild(taskInfo);
      taskContainer.appendChild(taskContent);

      taskCheckbox.addEventListener('change', () => {
        if (project.taskArr[i].checked == false) {
          project.taskArr[i].checked = true;
          renderMainContainer().getProjectDisplay(project);
          localStorage.setItem("projects", JSON.stringify(inputProjects));
        } else {
          project.taskArr[i].checked = false;
          renderMainContainer().getAllTasksDisplay(project);
          localStorage.setItem("projects", JSON.stringify(inputProjects));
        }
      })

      //Lets You Edit the Task Content
      const editContent = document.createElement('div');
      editContent.classList.add('edit-content');
      const editIcon = document.createElement('div');
      editIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>file-edit-outline</title><path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" /></svg>`;
      editIcon.classList.add('icon');

      editIcon.addEventListener('click', () => {
        editTaskTitle.value = `${project.taskArr[i].title}`;
        editTaskDescription.textContent = project.taskArr[i].description;
        editTaskDueDate.value = `${project.taskArr[i].dueDate}`;
        editTaskPriority.value = `${project.taskArr[i].priority}`;
        projectSubscript.value = `${project.title}`;
        tasksSubscript.value = `${i}`;
        taskDialog.showModal();
      })
      editContent.appendChild(editIcon);

      // Delete task button
      const deleteIcon = document.createElement('div');
      deleteIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
      deleteIcon.classList.add('icon');

      deleteIcon.addEventListener('click', () => {
        ProjectsFactory(inputProjects).removeTask(project, i);
          localStorage.setItem("projects", JSON.stringify(inputProjects));
          renderMainContainer().getProjectDisplay(inputProjects, project, index);
      })

      editContent.appendChild(deleteIcon);

      if (project.taskArr[i].priority === 'p1' || project.taskArr[i].priority === 'P1') {
        const priorityIcon = document.createElement('div');
        priorityIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24"><title>flag</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" fill="#ff7c48"/></svg>`;
        editContent.appendChild(priorityIcon);
      }
      taskContainer.appendChild(editContent);
      tasksContainer.appendChild(taskContainer);
      mainContainer.appendChild(tasksContainer);
    }

    // Lets you add tasks to the project
    const addTaskDiv = document.createElement('div');
    addTaskDiv.classList.add('add-task-div');

    const addIcon = document.createElement('div');
    addIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#ff7c48" /></svg>`;
    addTaskDiv.appendChild(addIcon);

    const addTaskText = document.createElement('p');
    addTaskText.textContent = 'Add Task';
    addTaskDiv.appendChild(addTaskText);

    addTaskDiv.addEventListener('click', () => {
      addProjectSubscript.value = index;
      console.log(addProjectSubscript.value);
      addTaskDialog.showModal();
    })

    mainContainer.appendChild(addTaskDiv);

    // Delete project button
    const projectDeleteButtonDiv = document.createElement('div');
    projectDeleteButtonDiv.classList.add('project-delete-div');

    const projectDeleteIcon = document.createElement('div');
    projectDeleteIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" fill="#ff7c48" /></svg>`;
    projectDeleteButtonDiv.appendChild(projectDeleteIcon);

    const projectDeleteText = document.createElement('p');
    projectDeleteText.textContent = 'Delete project';
    projectDeleteButtonDiv.appendChild(projectDeleteText);
    projectDeleteButtonDiv.addEventListener('click', () => {
      inputProjects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(inputProjects));
      renderSidebar(inputProjects);
      renderMainContainer().getAllTasksDisplay(inputProjects);
    })
    mainContainer.appendChild(projectDeleteButtonDiv);

  }

  main.appendChild(mainContainer);

  return { getTodayDisplay, getProjectDisplay, getAllTasksDisplay }
}