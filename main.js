// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
