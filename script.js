// mobile menu
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
