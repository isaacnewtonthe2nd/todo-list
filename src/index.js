import './styles.css';
import { ProjectsFactory } from './project';
import { renderSidebar } from './sidebarDOM';
import { renderMainContainer } from './mainContainerDOM';
import { renderDialogForm, editTaskDialog } from './dialogModals';

if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify([]));
}

export let projects = JSON.parse(localStorage.getItem('projects'));

renderSidebar(projects);
renderMainContainer();
renderMainContainer().getTodayDisplay(projects);

renderDialogForm(projects);

ProjectsFactory(projects);

editTaskDialog(projects);

console.log(projects);
localStorage.setItem('projects', JSON.stringify(projects));
