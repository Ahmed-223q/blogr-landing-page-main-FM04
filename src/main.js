let showAndhideIcon = document.getElementById("showAndhideIcon");
let mobilNavBar = document.getElementById("mobilNavBar");
showAndhideIcon.onclick = () => {
  if (showAndhideIcon.getAttribute("src") === "images/icon-close.svg") {
    showAndhideIcon.src = "images/icon-hamburger.svg";
    mobilNavBar.style.display = "none";
  } else {
    showAndhideIcon.src = "images/icon-close.svg";
    mobilNavBar.style.display = "block";
  }
};
