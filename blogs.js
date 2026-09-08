// ================================================
// LÓGICA INTERACTIVA PARA LA SECCIÓN DE BLOGS
// ================================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. Inicializar animaciones/estados de las tarjetas de blog si existen en la página
    const botonesDespliegue = document.querySelectorAll('[data-bs-toggle="collapse"]');

    botonesDespliegue.forEach((boton) => {
        boton.addEventListener("click", function () {
            const estaExpandido = this.getAttribute("aria-expanded") === "true";
            
            // Cambia el texto del botón según el estado del despliegue
            if (estaExpandido) {
                this.textContent = "▲ Ocultar resumen";
            } else {
                this.textContent = "▼ Ver resumen rápido";
            }
        });
    });

    // 2. Guardar registro de lectura en localStorage cuando el usuario hace clic en "Leer artículo completo"
    const enlacesBlog = document.querySelectorAll('a[href^="blog"]');

    enlacesBlog.forEach((enlace) => {
        enlace.addEventListener("click", function () {
            const tituloArticulo = this.closest(".card-body") 
                ? this.closest(".card-body").querySelector(".card-title").textContent 
                : "Artículo del Blog";

            const registroLectura = {
                articulo: tituloArticulo,
                fechaVista: new Date().toLocaleString()
            };

            // Guarda en el historial local la última lectura realizada
            localStorage.setItem("ultimoBlogVisitado", JSON.stringify(registroLectura));
        });
    });
});