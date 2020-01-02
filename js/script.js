function toggleMenu(visible) {
  document.querySelector('.section__sidebar').classList.toggle('show', visible);
}

document.querySelector('.btn-close').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
