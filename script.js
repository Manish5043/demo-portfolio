// script.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      this.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  
  // Smooth scroll behavior
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Dark mode toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle Dark Mode';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '0.5rem 1rem';
  toggleBtn.style.background = '#2c3e50';
  toggleBtn.style.color = '#fff';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '6px';
  toggleBtn.style.cursor = 'pointer';
  document.body.appendChild(toggleBtn);
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  