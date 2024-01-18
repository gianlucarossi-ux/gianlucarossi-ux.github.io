AOS.init({
  once: true, //per eseguire le animazioni solo una volta
  duration: 1000, //durata dell'animazione
});

//funzione per chiudere il menu al click su dispositivi mobile
function closeNavbar() {
  if (window.innerWidth <= 992) {
    $('.navbar-toggler').click();
  }
}

//script per far sparire la bouncing icon allo scorrimento
document.addEventListener("scroll", function() {
  var animatedImage = document.getElementById("animatedImage");
  var scrollPosition = window.scrollY;

  // Modifica l'opacità quando l'utente scorre verso il basso
  if (scrollPosition > 0) {
      animatedImage.classList.add("hidden");
  } else {
      animatedImage.classList.remove("hidden");
  }
});