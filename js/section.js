function observeSectionsFade() {
  const section1 = document.getElementById("section-1");
  const section2 = document.getElementById("section-2");
  const section3 = document.getElementById("section-3");
  const sections = [section1, section2,section3];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-section");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("DOMContentLoaded", observeSectionsFade);
