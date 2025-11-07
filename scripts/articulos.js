// Arreglo de los productos
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
  },
  {
    nombre: "BCAA StarNutricion",
    descripcion: "Aminoácidos esenciales para la recuperación muscular.",
    precio: "$25.000",
    imagen: "../public/image/bcaastar.webp"
  },
  {
    nombre: "Colageno ENA",
    descripcion: "Mejora la salud de la piel, articulaciones y huesos.",
    precio: "$28.000",
    imagen: "../public/image/colagenoena.webp"
  },
  {
    nombre: "Creatina ENA 1Kg",
    descripcion: "Aumenta la fuerza y el rendimiento físico.",
    precio: "$60.000",
    imagen: "../public/image/creatinaena1kg.webp"
  },
  {
    nombre: "Creatina Star",
    descripcion: "Mejora la fuerza y resistencia durante el entrenamiento.", 
    precio: "$35.000",
    imagen: "../public/image/creatinastar.webp"
  },
  {
    nombre: "Multivitaminico Star",
    descripcion: "Complejo vitamínico para el bienestar diario.",
    precio: "$20.000",
    imagen: "../public/image/multivitaminicostar.webp"
  },
  {
    nombre: "Pre Entreno C4",
    descripcion: "Aumenta la energía y concentración antes del entrenamiento.",
    precio: "$50.000",
    imagen: "../public/image/prec4.webp"
  },
  {
    nombre: "Pre Entreno Gold",
    descripcion: "Mejora el rendimiento y la resistencia durante el ejercicio.",
    precio: "$45.000",
    imagen: "../public/image/pregold.webp"
  }
];

// Muestra los productos 
function mostrarProductos(lista) {
  const contenedor = document.getElementById("contenedor-productos");
  // Limpia antes de mostrar
  contenedor.innerHTML = ""; 

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

//Evento del buscador
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar todos los productos al inicio
  mostrarProductos(productos);

  //Activar búsqueda en tiempo real
  document.getElementById("buscador").addEventListener("input", filtrarProductos);
});