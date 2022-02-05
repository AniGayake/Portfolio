var scrollToTopBtn = document.getElementById("scroll-up");
var rootElement= document.documentElement;

function scrollToTop() {
  // body...
  rootElement.scrollTo({
    top:0
  })
}
if(scrollToTopBtn){
  scrollToTopBtn.addEventListener("click",scrollToTop);
}

// const menu = document.querySelector(".navigation");
// const menuItems = document.querySelectorAll(".nav-link");
// const hamburger= document.querySelector(".burger-menu");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".bars");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }
// if(hamburger){
// hamburger.addEventListener("click", toggleMenu);
// }