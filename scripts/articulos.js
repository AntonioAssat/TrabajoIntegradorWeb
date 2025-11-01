// ======== Datos de los productos ========
const productos = [
  {
    nombre: "Creatina ENA",
    descripcion: "Aumenta la fuerza y el rendimiento físico.",
    precio: "$33.000",
    imagen: "../public/image/cratina.webp"
  },
  {
    nombre: "Hydromax Nutremax",
    descripcion: "Hidratación avanzada y mejora del rendimiento.",
    precio: "$15.000",
    imagen: "../public/image/hydromax.webp"
  },
  {
    nombre: "Protein Foods",
    descripcion: "Ideal para ganar masa muscular y recuperarte rápido.",
    precio: "$38.000",
    imagen: "../public/image/protein-foods.webp"
  },
  {
    nombre: "Proteina StarNutricion",
    descripcion: "Proteína pura para mejorar la recuperación muscular.",
    precio: "$43.500",
    imagen: "../public/image/protein.webp"
  },
  {
    nombre: "Vitamina Ena",
    descripcion: "Refuerza tu sistema inmune y mejora el bienestar general.",
    precio: "$15.000",
    imagen: "../public/image/vitamina.webp"
  }
];

// Muestra los productos 
function mostrarProductos(lista) {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = ""; // Limpia antes de mostrar

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <p class="precio">${prod.precio}</p>
    `;

    contenedor.appendChild(card);
  });
}

// Filtrardo de los productos por búsqueda 
function filtrarProductos() {
  const input = document.getElementById("buscador").value.toLowerCase();

  const filtrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(input)
  );

  mostrarProductos(filtrados);
}

//Eventos 
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar todos los productos al cargar la página
  mostrarProductos(productos);

  //Activar búsqueda en tiempo real
  document.getElementById("buscador").addEventListener("input", filtrarProductos);
});