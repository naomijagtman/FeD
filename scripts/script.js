// JavaScript Document
console.log("hi");

// HAMBURGERMENU OPENEN

var openButton = document.querySelector("header > ul > li> button");
var deNav = document.querySelector("nav");

function openMenu() {  
  deNav.classList.add("toonMenu");
}

openButton.addEventListener("click", openMenu);

// HAMBURGERMENU SLUITEN

var sluitButton = document.querySelector("nav button");

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
} 

sluitButton.addEventListener("click", sluitMenu);

//Code voor uitklapmenu (niet zeker of nodig is)

// var highlights = document.querySelector("section:nth-of-type(3) button");

// highlights.addEventListener("click", toggleEersteMenu);

// function toggleEersteMenu() {
// 	var hetEersteMenu = document.querySelector("section:nth-of-type(3) ul");
// 	hetEersteMenu.classList.toggle("open");
// }