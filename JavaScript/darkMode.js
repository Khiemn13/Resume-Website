function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    navbar.classList.toggle('dark-mode');
  }
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(function(card) {
    card.classList.toggle('dark-mode');
  });
}
