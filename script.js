document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("toggleProjects");
const grid = document.getElementById("projectsGrid");
let collapsed = false;

btn.addEventListener("click", () => {
  collapsed = !collapsed;
  grid.classList.toggle("collapsed", collapsed);

  // Hide lists + links when collapsed
  grid.querySelectorAll("ul, .card-links, .muted").forEach(el => {
    el.style.display = collapsed ? "none" : "";
  });
});
