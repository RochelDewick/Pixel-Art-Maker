const submitButton = document.querySelectorAll("#sizePicker");
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');
const colorSelected = document.querySelector('#colorPicker').value;
const colorPicker = document.querySelector('#colorPicker');


function makeGrid(gridHeight, gridWidth) {
    table.innerHTML = "";
    for (var m = 0; m < gridHeight; m++) {
        const row = document.createElement('tr');
        table.append(row);
        for (var n = 0; n < gridWidth; n++) {
            const column = document.createElement('td');
            row.append(column);
        }
    } table.addEventListener('click', function (event) {
        if (event.target.nodeName === 'TD') {
            event.target.style.backgroundColor = colorPicker.value
        }
    })
}

// Select color input


// Select size input
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function (event) {

    event.preventDefault();
    makeGrid(height.value, width.value);
});