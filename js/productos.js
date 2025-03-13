async function cargarProductos() {
    try {
        const response = await fetch('fastfood.json'); // Cargar JSON
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const productos = await response.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

function renderizarProductos(productos) {
    const container = document.getElementById("productosContainer");
    container.innerHTML = ""; // Limpiar el contenedor

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

        // Agregar el contenido al contenedor
        container.innerHTML += productoHTML;
    });
}

// Ejecutar la función al cargar la página
cargarProductos();