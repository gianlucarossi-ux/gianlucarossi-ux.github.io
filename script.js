/*var typed = new Typed('#mission', {
  strings: ['Progetto soluzioni di valore a partire dai bisogni degli utenti'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 5000,
  loop: true
});

var typed = new Typed('#mission2', {
  strings: ['Progetto soluzioni di valore a partire dai bisogni degli utenti'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 5000,
  loop: true
});*/

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