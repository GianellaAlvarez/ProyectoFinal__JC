/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navDesplegable = document.getElementById('nav-desplegable'),
      navCerrar = document.getElementById('nav-cerrar')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navDesplegable){
    navDesplegable.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navCerrar){
    navCerrar.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const encabezadoNavLink = document.querySelectorAll('.encabezado__nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}encabezadoNavLink.forEach(n => n.addEventListener('click', linkAction))
