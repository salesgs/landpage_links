navbar = document.querySelector(".box header");
const isPhone = window.innerWidth < 768;
const isTablet = window.innerWidth >= 668 && window.innerWidth < 1024;
const isDesktop4k = window.innerWidth >= 2560;

function navbarColor() {
    if (!isPhone) {
        navbar.style.backgroundColor = 'rgba(37, 38, 40, 0.8)';
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.borderBottom = '1px solid rgba(0, 191, 99, 0.4)';

        navbar.style.height = "100px";
    };
    if (scrollY >= 200) {
        if (isPhone) {
            navbar.style.height = "200px";
        };
        if (isTablet) {
            navbar.style.height = "230px";
            navbar.style.backdropFilter = 'blur(5px)';
            navbar.style.backgroundColor = 'rgba(37, 38, 40, 0.8)';

        };
        if (isDesktop4k) {
            navbar.style.height = "270px";
            navbar.style.backdropFilter = 'blur(5px)';
        };
        navbar.style.transition = '0.5s';
    }
    else {
        if (!isPhone) {
            navbar.style.backgroundColor = '';
        }

        navbar.style.height = isPhone ? "200px" : '200px';
        navbar.style.transition = '0.5s';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.borderBottom = 'none';
    };
};
window.addEventListener('scroll', navbarColor);