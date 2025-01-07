var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

// Tab switching function
function opentab(tabName, event) {
  for (var tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (var tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  document.getElementById(tabName).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}

// Menu functions
function openmenu() {
  var sidemenu = document.getElementById("sidemenu");
  var hamburgerIcon = document.querySelector(".fa-bars");
  sidemenu.style.right = "0";
  hamburgerIcon.style.display = "none";
}

function closemenu() {
  var sidemenu = document.getElementById("sidemenu");
  var hamburgerIcon = document.querySelector(".fa-bars");
  sidemenu.style.right = "-200px";
  hamburgerIcon.style.display = "block";
}
