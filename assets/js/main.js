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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

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