let indiceActual = 0;
mostrarSlide(indiceActual);

function mostrarSlide(n) {
  let slides = document.querySelectorAll(".slides img");
  // Esconder todas las imágenes
  slides.forEach(slide => slide.style.display = "none");
  // Ajustar el índice si se sale del rango
  if (n >= slides.length) indiceActual = 0;
  if (n < 0) indiceActual = slides.length - 1;
  // Mostrar la imagen actual
  slides[indiceActual].style.display = "block";
}

function moverSlide(n) {
  mostrarSlide(indiceActual += n);
}
