document.addEventListener("DOMContentLoaded", function () {
    function arrow() {
        const arrow1 = document.getElementById("seta-1");
        const arrow2 = document.getElementById("seta-2");
        const isSmallScreen = window.innerWidth <= 1024;
        const arrows = [arrow1, arrow2];
        let posX = 0; // Inicializa a posição da seta

        setInterval(() => {
            // Alterna entre 0px e 10px
            if (posX === 0) {
                posX = 10;
            } else {
                posX = 0;
            }
            arrows.forEach(arrow => {
                if (arrow) {
                    if (isSmallScreen) {
                        arrow.style.transform = `translatey(${posX}px)`;
                        arrow1.style.display = "none"
                        arrow2.style.display = "flex"
                    } else {
                        arrow.style.transform = `translateX(${posX}px)`;
                    }
                   
                }
            });
        }, 200); // A cada 200ms
    }

    arrow(); // Chama a função para começar a animação
});
