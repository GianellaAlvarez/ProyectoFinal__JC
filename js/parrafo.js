/* PRECIO DEL PLAN BLACK */
    const parrafo = document.getElementById('miParrafo');

parrafo.addEventListener('mouseover', () => {
  parrafo.textContent = '$25.500 / 2ros meses';
});

parrafo.addEventListener('mouseout', () => {
  parrafo.textContent = '$ 89.900  / mes';
});

