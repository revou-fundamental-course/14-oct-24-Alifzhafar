document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
  const revealElements = document.querySelectorAll('.deskripsi, .profile-article, .portofolio-article');

window.addEventListener('scroll', function() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('comment').value;
  
    if (name === '' || email === '' || message === '') {
      e.preventDefault();
      alert('Harap lengkapi semua kolom!');
    } else {
      alert('Pesan berhasil dikirim!');
    }
  });
  document.querySelector('.contact-btn').addEventListener('click', function() {
    this.textContent = 'Sending...';
    setTimeout(() => {
      this.textContent = 'Submit';
    }, 2000);
  });
  