const catalogo = [
  "Dune",
  "Spider-Man",
  "Shrek 2",
  "Nuremberg",
  "La Momia",
  "Voltron",
  "Frieren",
  "Witch Hat Atelier",
  "Cowboy Bebop",
];

/* */
const listaPeliculas = document.querySelector("#lista-peliculas");
const btnActualizar = document.querySelector(".btn-actualizar");
/* */

btnActualizar.addEventListener("click", () => {
  addAgregarElementos();
});

function addAgregarElementos() {
  const peliculaSeleccionada = selectPelicula(3);

  const elementoLista = document.createElement("li");
  elementoLista.innerHTML = `<p class="pelicula"> ${peliculaSeleccionada} </p>`;

  listaPeliculas.appendChild(elementoLista);
}

function selectPelicula(index) {
  const pelicula = catalogo[index];
  return pelicula;
}
