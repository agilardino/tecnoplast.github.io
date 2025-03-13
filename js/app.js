const titles = {
    "/index.html": "Inicio - TecnoPlast del Perú - Líder en soluciones plásticas",
    "/nosotros.html": "Acerca de Nosotros - TecnoPlast del Perú - Líder en soluciones plásticas",
    "/servicios.html": "Nuestros Servicios - TecnoPlast del Perú - Líder en soluciones plásticas",
    "/productos.html": "Nuestros Productos - TecnoPlast del Perú - Líder en soluciones plásticas",
    "/contacto.html": "Contáctanos - TecnoPlast del Perú - Líder en soluciones plásticas"
};

// Cambia el título según la página actual
document.title = titles[window.location.pathname] || "TecnoPlast del Perú - Líder en soluciones plásticas";

