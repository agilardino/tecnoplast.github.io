"use strict";

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
function cargarProductos() {
  var response, productos, categoria;
  return regeneratorRuntime.async(function cargarProductos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('../data/catalogo.json'));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error("Error HTTP: ".concat(response.status));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          productos = _context.sent;
          // Detectar la categoría según el nombre de la página
          categoria = obtenerCategoriaDeURL();

          if (!(!categoria || !productos[categoria])) {
            _context.next = 13;
            break;
          }

          console.error("Categoría no encontrada en el JSON");
          return _context.abrupt("return");

        case 13:
          renderizarProductos(productos[categoria]);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error('Error al cargar los productos:', _context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

function obtenerCategoriaDeURL() {
  var path = window.location.pathname;
  if (path.includes("linea-fastfood.html")) return "fastfood";
  if (path.includes("linea-retail.html")) return "retail";
  if (path.includes("linea-limpieza.html")) return "limpieza";
  if (path.includes("linea-bolsas.html")) return "bolsas";
  if (path.includes("linea-impresa.html")) return "bolsas";
  return null;
}

function renderizarProductos(productos) {
  var container = document.getElementById("productosContainer");
  container.innerHTML = "";
  productos.forEach(function (producto) {
    var productoHTML = "\n            <div class=\"productos_ctl\">\n                <div class=\"image\">\n                    <img src=\"".concat(producto.imagen, "\" alt=\"").concat(producto.nombre, "\">\n                </div>\n                <div class=\"descripcion\">\n                    <dl>\n                        <dt><h3>").concat(producto.nombre, "</h3></dt>\n                        <dd><strong>C\xF3digo:</strong> ").concat(producto.codigo, "</dd>\n                        <dd><strong>Material:</strong> ").concat(producto.material, "</dd>\n                        <dd><strong>Presentaci\xF3n:</strong> ").concat(producto.presentacion, "</dd>\n                        <dd><strong>Embalaje:</strong> ").concat(producto.embalaje, "</dd>\n                        <dd><strong>M\xF3dulo de venta:</strong> ").concat(producto.moduloVenta, "</dd>\n                        <dd><strong>Dimensiones:</strong> ").concat(producto.dimensiones, "</dd>\n                        <dd><strong>Color:</strong> ").concat(producto.color, "</dd>\n                    </dl>\n                </div>\n            </div>\n        ");
    container.innerHTML += productoHTML;
  });
} // Ejecutar la función al cargar la página


cargarProductos();