
/*=============== SHOW MENU ===============*/
const menuOculto = document.getElementById('menuOculto'),
      desplegable = document.getElementById('desplegable'),
      cerrar = document.getElementById('cerrar')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(desplegable){
    desplegable.addEventListener('click', () =>{
        menuOculto.classList.add('show--menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(cerrar){
    cerrar.addEventListener('click', () =>{
        menuOculto.classList.remove('show--menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const menuOculto = document.getElementById('menuOculto')
    // When we click on each nav__link, we remove the show-menu class
    menuOculto.classList.remove('show--menu')
}navLink.forEach(n => n.addEventListener('click', linkAction))
