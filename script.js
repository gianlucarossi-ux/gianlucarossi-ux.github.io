// Inizializzazione AOS
AOS.init({
    duration: 800, // Durata animazione
    easing: 'ease-in-out', // Easing per la transizione
    once: true, // Esegue l'animazione solo al primo caricamento
});

// Funzione per stampare l'anno corrente nel footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
});
  