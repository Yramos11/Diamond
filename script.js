// SWIPER JS
var swiper = new Swiper(".mySwiper", {

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// MENU HAMBURGER

let botaoMenuHamburguer = document.querySelector("#checkbox")
let divMenuHamburguer = document.querySelector(".menuHamburger")

botaoMenuHamburguer.addEventListener("click", function(){

  divMenuHamburguer.classList.toggle("desativo")
})