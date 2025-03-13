"use strict";

function cargarProductos() {
  var response, productos;
  return regeneratorRuntime.async(function cargarProductos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('fastfood.json'));

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
          renderizarProductos(productos);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error al cargar los productos:', _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function renderizarProductos(productos) {
  var container = document.getElementById("productosContainer");
  container.innerHTML = ""; // Limpiar el contenedor

  productos.forEach(function (producto) {
    var productoHTML = "\n            <div class=\"productos_ctl\">\n                <div class=\"image\">\n                    <img src=\"".concat(producto.imagen, "\" alt=\"").concat(producto.nombre, "\">\n                </div>\n                <div class=\"descripcion\">\n                    <dl>\n                        <dt><h3>").concat(producto.nombre, "</h3></dt>\n                        <dd><strong>C\xF3digo:</strong> ").concat(producto.codigo, "</dd>\n                        <dd><strong>Material:</strong> ").concat(producto.material, "</dd>\n                        <dd><strong>Presentaci\xF3n:</strong> ").concat(producto.presentacion, "</dd>\n                        <dd><strong>Embalaje:</strong> ").concat(producto.embalaje, "</dd>\n                        <dd><strong>M\xF3dulo de venta:</strong> ").concat(producto.moduloVenta, "</dd>\n                        <dd><strong>Dimensiones:</strong> ").concat(producto.dimensiones, "</dd>\n                        <dd><strong>Color:</strong> ").concat(producto.color, "</dd>\n                    </dl>\n                </div>\n            </div>\n        "); // Agregar el contenido al contenedor

    container.innerHTML += productoHTML;
  });
} // Ejecutar la función al cargar la página


cargarProductos();