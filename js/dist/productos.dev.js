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
var productos = {
  fastfood: [{
    nombre: "Repostero 4 3/4",
    codigo: "0507003",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fundón",
    dimensiones: "Alto: 45.5 mm / Ancho: 120.5 mm / Largo: 54.5 mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_4_3-4.jpg"
  }, {
    nombre: "Repostero de 5 onzas",
    codigo: "0507202",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fund&oacute;n",
    dimensiones: "Alto: 35.2 mm / Diámetro: 120.5 mm / Diámetro inferior: 61.5mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_5onz.jpg"
  }, {
    nombre: "Repostero de 5 onzas",
    codigo: "0507202",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fund&oacute;n",
    dimensiones: "Alto: 35.2 mm / Diámetro: 120.5 mm / Diámetro inferior: 61.5mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_5onz.jpg"
  }, {
    nombre: "Repostero de 5 onzas",
    codigo: "0507202",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fund&oacute;n",
    dimensiones: "Alto: 35.2 mm / Diámetro: 120.5 mm / Diámetro inferior: 61.5mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_5onz.jpg"
  }, {
    nombre: "Repostero de 5 onzas",
    codigo: "0507202",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fund&oacute;n",
    dimensiones: "Alto: 35.2 mm / Diámetro: 120.5 mm / Diámetro inferior: 61.5mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_5onz.jpg"
  }, {
    nombre: "Repostero de 5 onzas",
    codigo: "0507202",
    material: "Elaborados en poliestireno espumado",
    presentacion: "Funda de 25 unidades",
    embalaje: "Fund&oacute;n de polietileno",
    moduloVenta: "20 fundas por fund&oacute;n",
    dimensiones: "Alto: 35.2 mm / Diámetro: 120.5 mm / Diámetro inferior: 61.5mm",
    color: "Blanco y amarillo",
    imagen: "images/productos/Repostero_5onz.jpg"
  }],
  limpieza: [{
    nombre: "Esponja Multiusos",
    codigo: "0980020",
    material: "Fibra sintética",
    presentacion: "Pack de 10 unidades",
    embalaje: "Caja de cartón",
    moduloVenta: "10 cajas por fundón",
    dimensiones: "Alto: 20 mm / Ancho: 100 mm / Largo: 150 mm",
    color: "Verde",
    imagen: "images/productos/esponja.jpg"
  }],
  bolsas: [{
    nombre: "Bolsa Biodegradable",
    codigo: "0980030",
    material: "Plástico biodegradable",
    presentacion: "Paquete de 100 unidades",
    embalaje: "Caja de cartón",
    moduloVenta: "5 cajas por fundón",
    dimensiones: "Alto: 500 mm / Ancho: 300 mm",
    color: "Verde",
    imagen: "images/productos/bolsa.jpg"
  }]
};
document.addEventListener("DOMContentLoaded", function () {
  var categoria = obtenerCategoriaDeURL();

  if (!categoria || !productos[categoria]) {
    console.error("Categoría no encontrada");
    return;
  }

  renderizarProductos(productos[categoria]);
});

function obtenerCategoriaDeURL() {
  var path = window.location.pathname;
  if (path.includes("linea-fastfood.html")) return "fastfood";
  if (path.includes("linea-retail.html")) return "retail";
  if (path.includes("linea-limpieza.html")) return "limpieza";
  if (path.includes("linea-bolsas.html")) return "bolsas";
  if (path.includes("linea-impresa.html")) return "impresa";
  return null;
}

function renderizarProductos(listaProductos) {
  var container = document.getElementById("productosContainer");
  container.innerHTML = "";
  listaProductos.forEach(function (producto) {
    var productoHTML = "\n            <div class=\"productos_ctl\">\n                <div class=\"image\">\n                    <img src=\"".concat(producto.imagen, "\" alt=\"").concat(producto.nombre, "\">\n                </div>\n                <div class=\"descripcion\">\n                    <dl>\n                        <dt><h3>").concat(producto.nombre, "</h3></dt>\n                        <dd><strong>C\xF3digo:</strong> ").concat(producto.codigo, "</dd>\n                        <dd><strong>Material:</strong> ").concat(producto.material, "</dd>\n                        <dd><strong>Presentaci\xF3n:</strong> ").concat(producto.presentacion, "</dd>\n                        <dd><strong>Embalaje:</strong> ").concat(producto.embalaje, "</dd>\n                        <dd><strong>M\xF3dulo de venta:</strong> ").concat(producto.moduloVenta, "</dd>\n                        <dd><strong>Dimensiones:</strong> ").concat(producto.dimensiones, "</dd>\n                        <dd><strong>Color:</strong> ").concat(producto.color, "</dd>\n                    </dl>\n                </div>\n            </div>\n        ");
    container.innerHTML += productoHTML;
  });
} // async function cargarProductos() {
//     try {
//         const response = await fetch('../data/catalogo.json');
//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         const productos = await response.json();
//         // Detectar la categoría según el nombre de la página
//         const categoria = obtenerCategoriaDeURL();
//         if (!categoria || !productos[categoria]) {
//             console.error("Categoría no encontrada en el JSON");
//             return;
//         }
//         renderizarProductos(productos[categoria]);
//     } catch (error) {
//         console.error('Error al cargar los productos:', error);
//     }
// }
// function obtenerCategoriaDeURL() {
//     const path = window.location.pathname;
//     if (path.includes("linea-fastfood.html")) return "fastfood";
//     if (path.includes("linea-retail.html")) return "retail";
//     if (path.includes("linea-limpieza.html")) return "limpieza";
//     if (path.includes("linea-bolsas.html")) return "bolsas";
//     if (path.includes("linea-impresa.html")) return "bolsas";
//     return null;
// }
// function renderizarProductos(productos) {
//     const container = document.getElementById("productosContainer");
//     container.innerHTML = "";
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
//         container.innerHTML += productoHTML;
//     });
// }
// // Ejecutar la función al cargar la página
// cargarProductos();