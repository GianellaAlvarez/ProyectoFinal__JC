const botonMostrar = document.getElementById('mostrarBoton');
const textoOculto = document.getElementById('textoOculto');
    
botonMostrar.addEventListener('click', () => {
    textoOculto.style.display = 'block';
});
