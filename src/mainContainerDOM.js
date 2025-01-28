export function renderMainContainer () {
  const main = document.querySelector('#main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add("main-container");

  main.appendChild(mainContainer);
}