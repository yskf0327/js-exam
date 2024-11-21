const bodyElm = document.querySelector('body');
const drawerButton = document.getElementById('js-drawer-button');

drawerButton.addEventListener('click', () => {
  bodyElm.classList.toggle('open');
});
