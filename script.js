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

//funzione per utilizzare l'anno corrente per la scritta del copyright
$(document).ready(function() {
  // Ottieni l'anno corrente
  var currentYear = new Date().getFullYear();

  // Scrivi l'anno corrente all'interno dell'elemento con id "anno"
  $('#anno').text(currentYear);
});

function toggleMenu() {
  var body = document.querySelector('body');
  var links = document.querySelectorAll('.link-to-animate');

  body.classList.toggle('menu-open');

  links.forEach(function(link) {
    link.classList.add('link-animation');
  });
}


