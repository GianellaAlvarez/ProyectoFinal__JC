

function manejarCambiosDeImagen(contenedor, rutaNormal, rutaMouseover) {
    function cambiarImagen() {
      imagen.src = rutaMouseover;
      contenedor.removeEventListener('mouseleave', cambiarImagen);
      contenedor.addEventListener('mouseleave', volverImagenNormal);
    }
  
    function volverImagenNormal() {
      imagen.src = rutaNormal;
      contenedor.removeEventListener('mouseleave', volverImagenNormal);
      contenedor.addEventListener('mouseover', cambiarImagen);
    }
  
    const imagen = contenedor.querySelector('img'); // Busca la imagen dentro del contenedor
    contenedor.addEventListener('mouseover', cambiarImagen);
    contenedor.addEventListener('mouseleave', volverImagenNormal);
  }
  
  // Aplicar la función a los diferentes contenedores
  const contenedor1 = document.getElementById('contenedor1');
  const contenedor2 = document.getElementById('contenedor2');
  const contenedor3 = document.getElementById('contenedor3');
  const contenedor4 = document.getElementById('contenedor4');
  const contenedor5 = document.getElementById('contenedor5');
  const contenedor6 = document.getElementById('contenedor6');

  
  manejarCambiosDeImagen(contenedor1, './img/resenas.png', './img/resenas.gif');
  manejarCambiosDeImagen(contenedor2, './img/resenas.png', './img/resenas.gif');
  manejarCambiosDeImagen(contenedor3, './img/resenas.png', './img/resenas.gif');
  manejarCambiosDeImagen(contenedor4, './img/resenas.png', './img/resenas.gif');
  manejarCambiosDeImagen(contenedor5, './img/resenas.png', './img/resenas.gif');
  manejarCambiosDeImagen(contenedor6, './img/resenas.png', './img/resenas.gif');

  