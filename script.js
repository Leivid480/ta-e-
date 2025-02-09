function handleYes() {
  // Redirigir a otra página cuando se presiona "Sí"
  window.location.href = 'yes.html';
}

function handleNo() {
  // Mover el botón "No" y deshabilitarlo
  var noButton = document.getElementById('noButton');
  noButton.style.position = 'absolute';
  noButton.style.left = Math.random() * window.innerWidth + 'px';
  noButton.style.top = Math.random() * window.innerHeight + 'px';
  
}
