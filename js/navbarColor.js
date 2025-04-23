navbar =document.querySelector(".box header");
const isSmallScreen = window.innerWidth < 1024;
const largeScreen = window.innerWidth >= 2560;
function navbarColor() {
    if (scrollY >= 200) {
        navbar.style.backgroundColor = isSmallScreen ? '#174c7260' : '#174c7260';
        navbar.style.height = isSmallScreen ? "270px" : largeScreen ? "270px" : '100px';
        // navbar.style.height = largeScreen ? "270px" : '100px';
        navbar.style.transition = '0.5s'
    }
    else{
        navbar.style.backgroundColor = '';
        navbar.style.height = isSmallScreen ? "200px" : '150px';
        navbar.style.transition = '0.5s'
    }
};
window.addEventListener('scroll', navbarColor);