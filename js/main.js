// Buggy main.js
document.getElementById("title").innerText = "Welcome";

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

// toggleMenu is not defined
function toggleMenu() {
  const menu = document.getElementById("menu");
  // Toggle the visibility of the menu
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
