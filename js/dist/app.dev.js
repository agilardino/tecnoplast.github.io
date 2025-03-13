"use strict";

var titles = {
  "/index.html": "Inicio - TecnoPlast del Perú - Líder en soluciones plásticas",
  "/nosotros.html": "Acerca de Nosotros - TecnoPlast del Perú - Líder en soluciones plásticas",
  "/servicios.html": "Nuestros Servicios - TecnoPlast del Perú - Líder en soluciones plásticas",
  "/productos.html": "Nuestros Productos - TecnoPlast del Perú - Líder en soluciones plásticas",
  "/contacto.html": "Contáctanos - TecnoPlast del Perú - Líder en soluciones plásticas"
}; // Cambia el título según la página actual

document.title = titles[window.location.pathname] || "TecnoPlast del Perú - Líder en soluciones plásticas"; // $(document).scroll(function() {
//     var y = $(this).scrollTop();
//     var windowHeight = $(window).height(); // Get window height
//     if (y > windowHeight / 10) {
//       $(".chevron").hide();
//     } else {
//       $(".chevron").show();
//     }
//   });

$(document).ready(function () {
  function handleChevron() {
    if (window.matchMedia("(max-width: 450px)").matches) {
      $(document).scroll(function () {
        var y = $(this).scrollTop();
        var windowHeight = $(window).height();

        if (y > windowHeight / 10) {
          $(".chevron").fadeOut();
        } else {
          $(".chevron").fadeIn();
        }
      });
    } else {
      $(".chevron").hide();
    }
  }

  handleChevron(); // Ejecutar al cargar la página

  $(window).resize(handleChevron); // Volver a ejecutar al cambiar el tamaño de pantalla
});