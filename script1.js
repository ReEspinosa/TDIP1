// Interacción en la página principal
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo-principal");
    titulo.addEventListener("click", () => {
        alert("¡Hiciste clic en el título principal!");
    });
});
