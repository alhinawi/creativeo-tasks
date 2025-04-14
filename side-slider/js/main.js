const slider = document.getElementById("slider");
const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const filterInput = document.getElementById("filterInput");
const menuItems = document.querySelectorAll(".menu-item");

const openSlider = () => {
  slider.classList.add("open");
  overlay.classList.add("show");
};

const closeSlider = () => {
  slider.classList.remove("open");
  overlay.classList.remove("show");
};

openBtn.addEventListener("click", openSlider);
closeBtn.addEventListener("click", closeSlider);
overlay.addEventListener("click", closeSlider);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSlider();
  }
});

filterInput.addEventListener("input", () => {
  const filterValue = filterInput.value.toLowerCase();
  menuItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterValue) ? "" : "none";
  });
});
