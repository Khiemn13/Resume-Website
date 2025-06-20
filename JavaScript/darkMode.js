function toggleDarkMode() {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const cards = document.querySelectorAll('.project-card');

  const isDark = body.classList.toggle('dark-mode');

  if (navbar) {
    navbar.classList.toggle('dark-mode');
  }

  cards.forEach(function(card) {
    card.classList.toggle('dark-mode');
  });

  if (isDark) 
    { localStorage.setItem('theme', 'dark');}
  else 
    { localStorage.setItem('theme', 'light');}
}


 // Save the theme preference in localStorage
  window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const cards = document.querySelectorAll('.project-card');
  const savedTheme = localStorage.getItem('theme');



  if (savedTheme === 'dark') {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    
    cards.forEach(function(card) {
      card.classList.toggle('dark-mode');
  });
  
  }
  });