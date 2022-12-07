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



/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
//window.addEventListener("keydown", handleKeydown);

//function handleKeydown(event) {
  //if (event.key == "Escape") {
    //var deNav = document.querySelector("nav");
    //deNav.classList.remove("toonMenu");
  //}
//}


//uitklapmenu 
var highlights = document.querySelector("section:nth-of-type(3) button");

highlights.addEventListener("click", toggleEersteMenu);

function toggleEersteMenu() {
	var hetEersteMenu = document.querySelector("section:nth-of-type(3) ul");
	hetEersteMenu.classList.toggle("open");
}