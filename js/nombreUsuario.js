document.addEventListener('DOMContentLoaded', function() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
      // Si hay un usuario actual en el localStorage, muestra su nombre y apellido
      const nombreApellido = document.getElementById('nombreApellido');
      nombreApellido.textContent = `${currentUser.nombre} ${currentUser.apellido}`;
  }
});
