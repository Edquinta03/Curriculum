function imprimirSeccion(id) {
  // Guarda el contenido original de la página
  var contenidoOriginal = document.body.innerHTML;

  // Obtén el contenido de la sección que deseas imprimir
  var contenidoImprimir = document.getElementById(id).outerHTML;

  // Reemplaza el contenido de la página con la sección deseada
  document.body.innerHTML = contenidoImprimir;

  // Llama a la función de impresión
  window.print();

  // Restaura el contenido original de la página
  document.body.innerHTML = contenidoOriginal;
}

function toggleCard(card) {
  card.classList.toggle("flip");
}

function setCardBackground(imgElement) {
  const colorThief = new ColorThief();
  const cardFront = imgElement.closest(".card").querySelector(".card-front");

  if (imgElement.complete) {
    const dominantColor = colorThief.getColor(imgElement);
    cardFront.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
  } else {
    imgElement.addEventListener("load", () => {
      const dominantColor = colorThief.getColor(imgElement);
      cardFront.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
    });
  }
}
