navbar =document.querySelector(".box header");
const isPhone = window.innerWidth < 768;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
const isDesktop4k = window.innerWidth >= 2560;

function navbarColor() {
    if (!isPhone) {
        navbar.style.backgroundColor = '#174c7260';
            navbar.style.height = "100px"
    } 
    if (scrollY >= 200) {
        if (isPhone) {
              navbar.style.height = "200px"
          } 
          if (isTablet) {
            navbar.style.height = "230px"
            navbar.style.backgroundColor = '#174c7260';
          }  
          if (isDesktop4k) {
             navbar.style.height = "270px"
        
          }       
        navbar.style.transition = '0.5s'
    }
    else{
        if (!isPhone) {
            navbar.style.backgroundColor = '';
          }   
        navbar.style.height = isPhone ? "200px" : '200px';
        navbar.style.transition = '0.5s'
    }
};
window.addEventListener('scroll', navbarColor);