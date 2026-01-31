function changeShapeColor(color) {
  let shapes = document.querySelectorAll('.shape');
  for (let shape of shapes) {
    shape.style.backgroundColor = color;
  }
}

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}