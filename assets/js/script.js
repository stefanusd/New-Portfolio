// Change Class Sticky
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 20);
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    var element = document.getElementById("btn-scrl");
    element.classList.add("show");
  } else {
    var element = document.getElementById("btn-scrl");
    element.classList.remove("show");
  }
});
window.onclick = function () {
  document.getElementById("btn-scrl");
  document.documentElement.scrollTop = 0;
};

const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar .nav-links");
const li = document.querySelector(".menu-btn i");
var tombol = menu && li;

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  li.classList.toggle("active");
});

// const typed = new type(".type-text", {
//   strings = ["Web Developer", "Project Manager", "Designer"],
//   typeSpeed: 100,
//   backSpeed:60,
//   loop: true
// });
var typed = new Typed(".text-typing", {
  strings: ["Web Developer", "Project Manager", "Designer", "Freelancer"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});
