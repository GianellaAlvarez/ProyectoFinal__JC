fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    /* Aquí va el código para manejar eventos del menú */
    const navDesplegable = document.getElementById('nav-desplegable');
    const navCerrar = document.getElementById('nav-cerrar');
    const navMenu = document.getElementById('nav-menu');

    if (navDesplegable) {
      navDesplegable.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navCerrar) {
      navCerrar.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const encabezadoNavLink = document.querySelectorAll('.encabezado__nav__link');

    function linkAction() {
      navMenu.classList.remove('show-menu');
    }

    encabezadoNavLink.forEach(n => n.addEventListener('click', linkAction));
  });
