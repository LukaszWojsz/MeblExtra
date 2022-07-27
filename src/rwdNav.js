let icon = document.getElementById("hamburger");
const rwdNav = document.getElementById("rwdListContainer");
const closeIcon = document.getElementById("closeIcon");

icon.addEventListener("click", () => {
  rwdNav.classList.add("show");
  icon.classList.add("hideIcon");
  closeIcon.classList.add("showX");
  rwdNav.classList.remove("hide");
});

closeIcon.addEventListener("click", () => {
  rwdNav.classList.add("hide");
  rwdNav.classList.remove("show");
  icon.classList.remove("hideIcon");
  closeIcon.classList.remove("showX");
});




