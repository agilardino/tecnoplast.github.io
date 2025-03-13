// async function cargarProductos() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/agilardino/tecnoplast.github.io/refs/heads/main/data/fastfood.json'); // Cargar JSON
//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         const productos = await response.json();
//         renderizarProductos(productos);
//     } catch (error) {
//         console.error('Error al cargar los productos:', error);
//     }
// }

// function renderizarProductos(productos) {
//     const container = document.getElementById("productosContainer");
//     container.innerHTML = ""; // Limpiar el contenedor

//     productos.forEach(producto => {
//         const productoHTML = `
//             <div class="productos_ctl">
//                 <div class="image">
//                     <img src="${producto.imagen}" alt="${producto.nombre}">
//                 </div>
//                 <div class="descripcion">
//                     <dl>
//                         <dt><h3>${producto.nombre}</h3></dt>
//                         <dd><strong>Código:</strong> ${producto.codigo}</dd>
//                         <dd><strong>Material:</strong> ${producto.material}</dd>
//                         <dd><strong>Presentación:</strong> ${producto.presentacion}</dd>
//                         <dd><strong>Embalaje:</strong> ${producto.embalaje}</dd>
//                         <dd><strong>Módulo de venta:</strong> ${producto.moduloVenta}</dd>
//                         <dd><strong>Dimensiones:</strong> ${producto.dimensiones}</dd>
//                         <dd><strong>Color:</strong> ${producto.color}</dd>
//                     </dl>
//                 </div>
//             </div>
//         `;

//         // Agregar el contenido al contenedor
//         container.innerHTML += productoHTML;
//     });
// }

// // Ejecutar la función al cargar la página
// cargarProductos();




async function cargarProductos() {
    try {
        const response = await fetch('../data/catalogo.json');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const productos = await response.json();

        // Detectar la categoría según el nombre de la página
        const categoria = obtenerCategoriaDeURL();

        if (!categoria || !productos[categoria]) {
            console.error("Categoría no encontrada en el JSON");
            return;
        }

        renderizarProductos(productos[categoria]);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

function obtenerCategoriaDeURL() {
    const path = window.location.pathname;
    if (path.includes("linea-fastfood.html")) return "fastfood";
    if (path.includes("linea-retail.html")) return "retail";
    if (path.includes("linea-limpieza.html")) return "limpieza";
    if (path.includes("linea-bolsas.html")) return "bolsas";
    if (path.includes("linea-impresa.html")) return "bolsas";
    return null;
}

function renderizarProductos(productos) {
    const container = document.getElementById("productosContainer");
    container.innerHTML = "";

    productos.forEach(producto => {
        const productoHTML = `
            <div class="productos_ctl">
                <div class="image">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="descripcion">
                    <dl>
                        <dt><h3>${producto.nombre}</h3></dt>
                        <dd><strong>Código:</strong> ${producto.codigo}</dd>
                        <dd><strong>Material:</strong> ${producto.material}</dd>
                        <dd><strong>Presentación:</strong> ${producto.presentacion}</dd>
                        <dd><strong>Embalaje:</strong> ${producto.embalaje}</dd>
                        <dd><strong>Módulo de venta:</strong> ${producto.moduloVenta}</dd>
                        <dd><strong>Dimensiones:</strong> ${producto.dimensiones}</dd>
                        <dd><strong>Color:</strong> ${producto.color}</dd>
                    </dl>
                </div>
            </div>
        `;

        container.innerHTML += productoHTML;
    });
}

// Ejecutar la función al cargar la página
cargarProductos();