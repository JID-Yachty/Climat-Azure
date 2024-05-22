//Variables globales 
let compteur = 0; //compteur qui permet de connaitre l'image sur laquelle on se trouve 
let timer, elements, slides, slideWidth, speed; 

window.onload = () => {
    // on récupère le diaporama 
    const diapo = document.querySelector(".diapo"); 

    // On récupère le data-speed
    speed = diapo.dataset.speed;

    elements = document.querySelector(".elements");
    
    // On clone la première image 
    let firstImage = elements.firstElementChild.cloneNode(true); 

    // On injecte le clone à la fin du diapo 
    elements.appendChild(firstImage); 


    console.log(elements); 

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide 
    slideWidth = diapo.getBoundingClientRect().width; 

    // On récupère les flèches
    let next = document.querySelector("#nav-droit"); 
    let prev = document.querySelector("#nav-gauche");

    // On gère le click
    next.addEventListener("click", slideNext); 
    prev.addEventListener("click", slidePrev); 

    // On automatise le défilement 
    timer = setInterval(slideNext, speed); 

    // On gère l'arrêt et la reprise 
    diapo.addEventListener("mouseover", stopTimer); 
    diapo.addEventListener("mouseout", startTimer); 
}

/**
 * Cette fonction fait défiler le diaporama vers la droite 
 */
function slideNext(){
    // On incrémente le compteur 
    compteur++; 
    elements.style.transition = "1s linear"; 

    let decal = -slideWidth * compteur; 
    elements.style.transform = `translateX(${decal}px)`; 

    // On attend la fin de la transition et on "rambobin" de façon cacher 
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur=0;
            elements.style.transition = "unset"; 
            elements.style.transform = "translateX(0)"; 
        }
    }, 1000); 
}

/**
 * Cette function fait défiler le diaporama vers la gauche 
 */
function slidePrev(){
    // On décrémente le compteur 
    compteur--; 
    elements.style.transition = "1s linear";


    if(compteur < 0){
        compteur = slides.length -1; 
        let decal = -slideWidth * compteur;  
        elements.style.transition = "unset"; 
        elements.style.transform = `translateX(${decal}px)`; 
        setTimeout(slidePrev,1); 
    }
    let decal = -slideWidth * compteur; 
    elements.style.transform = `translateX(${decal}px)`;
}

function stopTimer(){
    clearInterval(timer); 
}

function startTimer(){
    timer = setInterval(slideNext, speed); 
}