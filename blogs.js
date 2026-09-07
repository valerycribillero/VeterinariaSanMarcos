document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos iniciales de prueba (por si no existen aún en localStorage)
    const blogsIniciales = [
        {
            id: 1,
            titulo: "¿Cómo cuidar la alimentación de tu mascota?",
            resumen: "La alimentación es uno de los aspectos más importantes para mantener saludable a una mascota. Una dieta adecuada debe considerar la edad, tamaño y nivel de actividad.",
            contenidoCompleto: "Una dieta adecuada debe considerar factores como la edad, el tamaño, la raza y el nivel de actividad física de la mascota. Los cachorros requieren más proteínas, mientras que los senior necesitan dietas de fácil digestión. Evita darles alimentos prohibidos como chocolate, cebolla o uvas.",
            imagen: "img/blog1.jpg",
            fecha: "2026-03-01"
        },
        {
            id: 2,
            titulo: "Cuidados básicos para mantener saludable a tu mascota",
            resumen: "Mantener una mascota saludable requiere cuidados constantes: controles periódicos, vacunación, higiene y estimulación física.",
            contenidoCompleto: "Además de una buena alimentación, es importante mantener hábitos de higiene como el cepillado regular y corte de uñas. Los paseos diarios y el cumplimiento del calendario de vacunación y desparasitación son esenciales para prevenir enfermedades.",
            imagen: "img/blog2.jpg",
            fecha: "2026-02-25"
        }
    ];

    // 2. Inicializar localStorage si está vacío
    if (!localStorage.getItem('blogsData')) {
        localStorage.setItem('blogsData', JSON.stringify(blogsIniciales));
    }

    // 3. Obtención de datos desde localStorage
    function obtenerBlogs() {
        const datos = localStorage.getItem('blogsData');
        return datos ? JSON.parse(datos) : [];
    }

    // 4. Renderizado dinámico en el DOM
    const contenedor = document.getElementById('contenedorBlogs');

    function desplegarBlogs() {
        if (!contenedor) return;

        const listaBlogs = obtenerBlogs();
        contenedor.innerHTML = '';

        if (listaBlogs.length === 0) {
            contenedor.innerHTML = '<p class="text-center text-muted my-5">No hay publicaciones disponibles en este momento.</p>';
            return;
        }

        listaBlogs.forEach(blog => {
            const articuloHTML = `
                <article class="blog-card mb-4">
                    <img src="${blog.imagen || 'img/blog1.jpg'}" class="blog-image" alt="${blog.titulo}">
                    <div class="blog-content">
                        <h2>${blog.titulo}</h2>
                        <p>${blog.resumen}</p>
                        
                        <!-- Despliegue colapsable de contenido -->
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#blogCollapse${blog.id}">
                            Leer artículo completo
                        </button>

                        <div class="collapse mt-3" id="blogCollapse${blog.id}">
                            <div class="card card-body bg-light">
                                <p>${blog.contenidoCompleto}</p>
                                <small class="text-muted">Publicado el: ${blog.fecha || 'Reciente'}</small>
                            </div>
                        </div>
                    </div>
                </article>
            `;
            contenedor.innerHTML += articuloHTML;
        });
    }

    // Ejecutar renderizado
    desplegarBlogs();
});