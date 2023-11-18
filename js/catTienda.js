document.getElementById("opcion1").addEventListener("click", function () {
    mostrarContenido("info1");
});

document.getElementById("opcion2").addEventListener("click", function () {
    mostrarContenido("info2");
});

document.getElementById("opcion3").addEventListener("click", function () {
    mostrarContenido("info3");
});

document.getElementById("opcion4").addEventListener("click", function () {
    mostrarContenido("info4");
});

document.getElementById("opcion5").addEventListener("click", function () {
    mostrarContenido("info5");
});

function mostrarContenido(idContenido) {
    // Ocultar todos los contenidos
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
    document.getElementById("info4").style.display = "none";
    document.getElementById("info5").style.display = "none";


    // Mostrar el contenido seleccionado
    document.getElementById(idContenido).style = "";
}

// Mostrar el contenido inicial (por ejemplo, Opción 1)
mostrarContenido("info1");

