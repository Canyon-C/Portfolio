document.addEventListener("DOMContentLoaded", function () {
  var border = document.querySelector(".cards1");
  var under = document.querySelector(".dynamic");
  var under2 = document.querySelector(".dynamic1");
  var border2 = document.querySelector(".cards");
  var border3 = document.querySelector(".cards2");
  var under3 = document.querySelector(".dynamic2");

  border2.addEventListener("mouseover", function () {
    under2.classList.add("underline");
  });

  border2.addEventListener("mouseout", function () {
    under2.classList.remove("underline");
  });

  border3.addEventListener("mouseover", function () {
    under3.classList.add("underline");
  });

  border3.addEventListener("mouseout", function () {
    under3.classList.remove("underline");
  });

  border.addEventListener("mouseover", function () {
    under.classList.add("underline");
  });
  border.addEventListener("mouseout", function () {
    under.classList.remove("underline");
  });
});

var trans = document.querySelector(".cards1");

4;
trans.addEventListener("mouseout", function () {
  trans.classList.add("off");
});

// Scroll Animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards1",
    start: "center bottom",
  },
});

tl.from("#under", { y: -200, opacity: 0, duration: 1.4 });

tl.from(".cards1", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl.from(".cards", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl.from(".cards2", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl.from(".cards3", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".shifttt",
    start: "center bottom",
  },
});

tl2.from(".fredd", { y: -200, opacity: 0, duration: 1.4 });

tl2.from(".shifttt", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl2.from(".working", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl2.from(".building", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

tl2.from(".logos", { y: -200, opacity: 0, duration: 1.1 }, "-=1");

let button = document.getElementById("tab").addEventListener("click", () => {
  window.open("https://www.val-skins.com", "_blank");
});

let UCSD = document.getElementById("git").addEventListener("click", () => {
  window.open("https://2576a8e9.visualizer-4i4.pages.dev/", "_blank");
});

let python = document.getElementById("git2").addEventListener("click", () => {
  window.open("https://github.com/Canyon-C/daq-GUI", "_blank");
});

var btn = document.querySelector("#redirect");
var btn2 = document.querySelector("#redirect2");

btn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: ".viewport2" });
});

btn2.addEventListener("click", () => {
  gsap.to(window, { scrollTo: ".viewport3" });
});
