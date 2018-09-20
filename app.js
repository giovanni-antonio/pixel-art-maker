const form = document.getElementById('sizePicker'),
  button = form.querySelector('input[type=submit]'),
  table = document.getElementById('pixelCanvas');
const backgroundColorPicker = document.getElementById('pickCanvasColor');
const Delete = document.getElementById('DeleteCanvas');

function makeGrid() {
  let inputHeight = form.querySelector('#inputHeight').value,
    inputWidth = form.querySelector('#inputWidth').value;

  // reset table
  table.innerHTML = "";

  // create element frame
  let fragment = document.createDocumentFragment(),
    tbody = document.createElement("tbody");
  // loop row and col
  for (let row = 0; row < inputHeight; row++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < inputWidth; col++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  fragment.appendChild(tbody);

  // render table elements
  table.appendChild(fragment);
}



function paintCanvas(e) {
  let color = document.getElementById('colorPicker').value;
  if (e.target.nodeName == 'TD') {
    e.target.style.backgroundColor = color;
  }
}

function erase(e) {
  if (e.target.nodeName == 'TD') {
    e.target.style.backgroundColor = "";
  }
}

function DeleteCanvas(e) {
  e.preventDefault();
  table.style.backgroundColor = '';
  let canvasSquares = Array.from(table.querySelectorAll('td'));
  for (let i = 0; i < canvasSquares.length; i++) {
    canvasSquares[i].style.backgroundColor = '';
  }
}

window.addEventListener('load', makeGrid());

backgroundColorPicker.addEventListener('change', function (e) {
  table.style.backgroundColor = e.target.value;
})

button.addEventListener("click", function (e) {
  e.preventDefault();
  makeGrid();
});

table.addEventListener("click", paintCanvas);
table.addEventListener("dblclick", erase);
Delete.addEventListener('click', DeleteCanvas);