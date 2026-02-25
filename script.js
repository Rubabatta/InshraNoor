
  // Scroll reveal animation
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach(el => observer.observe(el));

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Icon change (bars ↔ cross)
  if(navLinks.classList.contains("active")){
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});