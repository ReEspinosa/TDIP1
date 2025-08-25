// Interacción en las páginas secundarias
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".contenido");
    elementos.forEach(el => {
        el.addEventListener("mouseover", () => {
            el.style.backgroundColor = "#ffe6cc";
        });
        el.addEventListener("mouseout", () => {
            el.style.backgroundColor = "#cce6ff";
        });
    });
});
