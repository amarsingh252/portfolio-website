


/* Scroll Spy Effect */
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100; 
  document.querySelectorAll('section').forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

/* Click Highlight + Smooth Scroll */ 
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');

    // Smooth scroll to section 
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'
    });
  });
});



