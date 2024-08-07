let menuVisible = false;

//Está función oculta o muestra el M E N Ú

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Aquí se oculta todo el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=500){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("organized");
        habilidades[5].classList.add("focus");
        habilidades[6].classList.add("learner");
        habilidades[7].classList.add("Oriented");

    }
}
//detectar el scrolling para aplicar la animacion de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}