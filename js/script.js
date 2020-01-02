function toggleMenu(visible) {
  document.querySelector('.section__sidebar').classList.toggle('close', visible);
}

document.querySelector('.close-sidebar').addEventListener('click', function (e) {
  console.log('click: ', e);
  e.preventDefault();
  toggleMenu();
});
