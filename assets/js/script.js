// Const Keperluan
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar .nav-links");
const li = document.querySelector(".menu-btn i");
const list = document.querySelectorAll(".menu-list");
AOS.init();

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
var scrollup = document.getElementById("btn-scrl");
scrollup.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  li.classList.toggle("active");
});
list.forEach((menulist) => {
  menulist.addEventListener("click", () => {
    menu.classList.toggle("active");
    li.classList.toggle("active");
  });
});

var typed = new Typed(".text-typing", {
  strings: ["Web Developer", "Project Manager", "Designer", "Information System Student"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});
