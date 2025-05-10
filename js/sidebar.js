let isopen = false;
navbar = document.querySelector(".box header");
document.getElementById("buttonSidebar").onclick = () => {
  const link1 = document.getElementById("link-1");
  const link2 = document.getElementById("link-2");
  const link3 = document.getElementById("link-3");
  const link4 = document.getElementById("link-4");
  const links = [link1, link2, link3, link4];

  if (!isopen) {
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.remove("fade-out");
        link.classList.add("fade-in");
        navbar.style.backgroundColor = 'rgba(37, 38, 40, 0.8)';
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.borderBottom = '1px solid rgba(0, 191, 99, 0.5)';
      }, index * 100);
    });
  } else {
    links.slice().reverse().forEach((link, index) => {
      setTimeout(() => {
        link.classList.remove("fade-in");
        link.classList.add("fade-out");
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.borderBottom = 'none';
      }, index * 100);
    });
  }

  isopen = !isopen;
};
