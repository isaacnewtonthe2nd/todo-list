import { ProjectLocalStorage } from "./local-storage";

export function renderSidebar (projects) {
  const main = document.querySelector('#main');

  const sideContainer = document.createElement('div');
  sideContainer.classList.add("side-container");

  // Logo Creation

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');

  const logoText = document.createElement('p');
  logoText.textContent = "My ToDo List";
  logoDiv.appendChild(logoText);
  sideContainer.appendChild(logoDiv);

  // Creation of Add Project, Add Task, Today, and All Tasks buttons.

  const firstSetOfButtons = document.createElement('div');
  firstSetOfButtons.classList.add('add-item');

  const buttonsSetOneArr = ['addProject', 'addTask', 'today', 'allTasks'];
  for (let i = 0; i < buttonsSetOneArr.length; i++) {
    if (buttonsSetOneArr[i] === 'addProject' || buttonsSetOneArr[i] === 'addTask') { // Creates Add Project and Add Task Buttons.
      const addButton = document.createElement('div');
      addButton.classList.add('add-button');
      const svgDiv = document.createElement('div');
      svgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="#ff7c48"/></svg>`;
      addButton.appendChild(svgDiv);
      if (buttonsSetOneArr[i] === 'addProject') {  // Creates Unique Add Project Button
        const addProjectText = document.createElement('p');
        addProjectText.textContent = 'Add Project';
        addButton.appendChild(addProjectText);
      } else if (buttonsSetOneArr[i] === 'addTask') { // Creates unique Add Task Button
        const addTaskText = document.createElement('p');
        addTaskText.textContent = 'Add Task';
        addButton.appendChild(addTaskText);
      }
      firstSetOfButtons.appendChild(addButton);
    } else if (buttonsSetOneArr[i] === 'today') { // Creates Today Button
      const todayBtn = document.createElement('div');
      const svgDiv = document.createElement('div');
      svgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 24 24"><title>calendar-today</title><path d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>`;
      todayBtn.appendChild(svgDiv);
      const todayText = document.createElement('p');
      todayText.textContent = 'Today';
      todayBtn.appendChild(todayText);
      firstSetOfButtons.appendChild(todayBtn);
    } else if (buttonsSetOneArr[i] === 'allTasks') { // Creates All Tasks Button
      const allTasksBtn = document.createElement('div');
      const svgDiv = document.createElement('div');
      svgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 24 24"><title>format-list-bulleted</title><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>`;
      allTasksBtn.appendChild(svgDiv);
      const allTasksText = document.createElement('p');
      allTasksText.textContent = 'All Tasks';
      allTasksBtn.appendChild(allTasksText);
      firstSetOfButtons.appendChild(allTasksBtn);
    }
  }
  sideContainer.appendChild(firstSetOfButtons);

  // Creation of the Projects Section and Buttons
  const projectsDivContainer = document.createElement('div');
  projectsDivContainer.classList.add('projects');

  const projectsDivText = document.createElement('p');
  projectsDivText.textContent = 'My Projects';
  projectsDivContainer.appendChild(projectsDivText);

  const projectListDiv = document.createElement('div');
  projectListDiv.classList.add('projects-list');
  for (let i = 0; i < projects.length; i++) {
    const project = document.createElement('p');
    project.textContent = projects[i].title;
    projectListDiv.appendChild(project);
  } 
  projectsDivContainer.appendChild(projectListDiv);
  sideContainer.appendChild(projectsDivContainer);

  main.appendChild(sideContainer);
}