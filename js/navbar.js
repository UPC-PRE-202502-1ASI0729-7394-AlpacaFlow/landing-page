// Navbar color toggle after hero leaves viewport
const navbar = document.getElementById('mainNavbar');
const hero = document.querySelector('.hero-section');

if (navbar && hero) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // hero is visible -> make navbar light (over hero)
          navbar.classList.remove('scrolled');
        } else {
          // hero not visible -> switch navbar links to dark
          navbar.classList.add('scrolled');
        }
      });
    },
    { root: null, threshold: 0 }
  );

  observer.observe(hero);
}
