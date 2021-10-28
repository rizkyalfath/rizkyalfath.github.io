const reloadtButton = document.querySelector("navbar#a");
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
