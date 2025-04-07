// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'rgba(35, 10, 12, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.backgroundColor = 'rgba(35, 10, 12, 0.8)';
        navbar.style.boxShadow = 'none';
      }
    });
    
    // Feature card animations on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Simple animation when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    // Set initial state and observe each card
    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });

  window.onload = function() {
  // Hide the loading screen and show the main content
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
    
    buttons.forEach(button => {
      button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.98)';
      });
      
      button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.05)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
          
      });
    });
  });
