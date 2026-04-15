import { catalogo } from "./peliculas.js";
import { tickets } from "./tickets.js";

const entradaNombre = document.querySelector("#entrada-nombre");
const entradaPeliculas = document.querySelector("#entrada-peliculas");
const buttonEntradaAdd = document.querySelector("#entrada-add");
const mensajeTexto = document.querySelector("#mensaje-texto");
const buttonRegargar = document.querySelector("#cargar");
const entradasEmitidas = document.querySelector("#entradas-emitidas");
const entradasLista = document.querySelector("#entradas-lista");
const entradasCount = document.querySelector("#entradas-count");

buttonRegargar.addEventListener("click", () => {
  selectFilm();
});

function resetTextos() {
  entradaPeliculas.innerHTML =
    '<option value="0">Seleccionar película</option>';
  mensajeTexto.innerHTML = "";
}

function selectFilm() {
  try {
    if (catalogo.length === 0) {
      mensajeTexto.innerHTML = "<p>No se han podido cargar las películas</p>";
    } else {
      addFilm();
    }
  } catch (error) {
    console.error("Hubo un problema:", error.message);
  }
}

/* Pasos a seguir:
1 - Reset texto
2- determinar el index de la película
3- establecer un for each
4- crear un 'option' para cada elemento del catálogo (new option (text, value))
5- aumentar la variable del núm de la película
6- agregar al html/dom
*/
function addFilm() {
  resetTextos();
  let numPeliucla = 0;
  catalogo.forEach((pelicula) => {
    const option = new Option(
      catalogo[numPeliucla],
      (numPeliucla += 1).toString(),
    );
    entradaPeliculas.appendChild(option);
  });
}

/*
Pasos:
1- establecer varialbes para el nombre e indice deleccionado (.value, selectedIndex)
2- truthy falsy
3- returns
*/
function addTicketCheck(espectador, indicePelicula) {
  const ticketNombre = entradaNombre.value;
  const indiceSeleccionado = entradaPeliculas.selectedIndex;

  if (ticketNombre || indiceSeleccionado) {
    return true;
  } else {
    return false;
  }
}

/*
1- mismas dos variables que el check + establecer el nombre de la película (options[x].text)
2 - llamar a la funcón del check y con un if en base a lo que devuelva
3- createElement
4- innerHTML + key:value + `${}`
5- appendChild
6- llamamos a la función para que se agregue el ticket al array
7- como extra, agregamos parseInt(entradasCount.textContext), aumentamos el valor y lo mostramos en el log
*/
function addTicket() {
  const ticketNombre = entradaNombre.value;
  const indiceSeleccionado = entradaPeliculas.selectedIndex;
  const ticketPelicula = entradaPeliculas.options[indiceSeleccionado].text;

  if (!addTicketCheck(ticketNombre, indiceSeleccionado)) {
    alert("¡Faltan datos! Chequeá el nombre y la película.");
    return;
  }

  const nuevoTicket = document.createElement("li");
  nuevoTicket.innerHTML = `<p> Nombre: ${ticketNombre} - Película: ${ticketPelicula} </p>`;

  entradasLista.appendChild(nuevoTicket);
  addTicketToArray(`${ticketNombre}, ${ticketPelicula}`);

  let cantidadActualTickets = parseInt(entradasCount.textContent);
  entradasCount.textContent = cantidadActualTickets + 1;

  console.log(cantidadActualTickets);
}

function addTicketToArray(nombre, pelicula) {
  tickets.push({ espectador: nombre, pelicula: pelicula });
  console.log(tickets);
}

buttonEntradaAdd.addEventListener("click", () => {
  addTicket();
});
