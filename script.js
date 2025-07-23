//menu burgeur
document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var mobileMenu = document.getElementById("mobile-menu");
    var closeMenu = document.getElementById("close-menu");
    var closeBtn = document.querySelector(".close-btn");

    // Fonction pour vérifier la taille de la fenêtre et ajuster l'affichage du menu burger
    function checkWindowSize() {
        if (window.innerWidth <= 1024) {
            menuToggle.style.display = "flex"; 
        } else {
            menuToggle.style.display = "none"; 
            mobileMenu.classList.remove("active"); 
        }
    }

    // Appel initial pour définir l'affichage en fonction de la taille de la fenêtre
    checkWindowSize();

    // Re-vérifier lors du redimensionnement de la fenêtre
    window.addEventListener("resize", checkWindowSize);

    // Ouvrir le menu mobile
    menuToggle.onclick = function () {
        mobileMenu.classList.add("active");
        menuToggle.style.display = "none"; 
        closeBtn.style.display = "block"; 
    };

    // Fermer le menu mobile
    closeMenu.onclick = function (event) {
        event.preventDefault();
        mobileMenu.classList.remove("active");
        menuToggle.style.display = "flex"; 
        closeBtn.style.display = "none"; 
    };    
});



//a propos

// document.addEventListener("DOMContentLoaded", function () {
//     const leftElt = document.querySelector(".left");
//     const rightElt = document.querySelector(".right");

//     const goRight = () => {
//         const parent = document.querySelector(".cartes");
//         const leftElt = document.querySelector(".left");
//         const centerElt = document.querySelector(".center");
//         const rightElt = document.querySelector(".right");

//         leftElt.classList.remove("left");
//         leftElt.classList.add("center");
//         centerElt.classList.remove("center");
//         centerElt.classList.add("right");
//         rightElt.classList.remove("right");
//         rightElt.classList.add("left");

//         leftElt.style.zIndex = "2";
//         rightElt.style.zIndex = "1";
//         centerElt.style.zIndex = "1";

//         parent.innerHTML = "";

        
//         parent.appendChild(rightElt);
//         parent.appendChild(leftElt);
//         parent.appendChild(centerElt);
        
//         leftElt.addEventListener("click", goRight);
        
//     }

//     leftElt.addEventListener("click", goRight);

// });

document.addEventListener("DOMContentLoaded", function () {
    const parent = document.querySelector(".cartes");

    const goRight = () => {
        const leftElt = document.querySelector(".left");
        const centerElt = document.querySelector(".center");
        const rightElt = document.querySelector(".right");

        leftElt.classList.remove("left");
        leftElt.classList.add("center");

        centerElt.classList.remove("center");
        centerElt.classList.add("right");

        rightElt.classList.remove("right");
        rightElt.classList.add("left");

        leftElt.style.zIndex = "2";
        rightElt.style.zIndex = "1";
        centerElt.style.zIndex = "1";

        parent.innerHTML = "";
        parent.appendChild(rightElt);
        parent.appendChild(leftElt);
        parent.appendChild(centerElt);
    };

    const goLeft = () => {
        const leftElt = document.querySelector(".left");
        const centerElt = document.querySelector(".center");
        const rightElt = document.querySelector(".right");

        rightElt.classList.remove("right");
        rightElt.classList.add("center");

        centerElt.classList.remove("center");
        centerElt.classList.add("left");

        leftElt.classList.remove("left");
        leftElt.classList.add("right");

        rightElt.style.zIndex = "2";
        leftElt.style.zIndex = "1";
        centerElt.style.zIndex = "1";

        parent.innerHTML = "";
        parent.appendChild(centerElt);
        parent.appendChild(rightElt);
        parent.appendChild(leftElt);
    };

    // Clic sur la moitié de l’écran
    document.addEventListener("click", function (e) {
        const screenMiddle = window.innerWidth / 2;
        if (e.clientX < screenMiddle) {
            goRight();
        } else {
            goLeft();
        }
    });
});



//mes Projet page
document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".menu li");
    const projects = document.querySelectorAll(".list_projet > div");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            const selectedFilter = this.getAttribute("data-filter");

            projects.forEach(project => {
                if (selectedFilter === "all" || project.classList.contains(selectedFilter)) {
                    project.style.display = "block"; // Affiche les projets correspondants
                } else {
                    project.style.display = "none"; // Cache les autres
                }
            });

            // Optionnel : Mettre en surbrillance le bouton sélectionné
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");
        });
    });
});