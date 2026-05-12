// EFECTO SIMPLE DE NAVBAR

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("scroll", window.scrollY > 50);

});
