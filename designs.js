// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()

// Selectors assigned to variables
let inputColor, inputHeight, inputWeight, pixelCanvas, sizePicker;
inputColor = $("#colorPicker");
pixelCanvas = $("#pixelCanvas");

// The code below will create the grid.

function makeGrid() {
  inputHeight = $("#inputHeight").val();
  inputWeight = $("#inputWeight").val();
  pixelCanvas.children().remove();
  for (let s = 0; s < inputHeight; s++) {
    pixelCanvas.append("<tr></tr>");
  }
  let gridRows = $("tr");
  for (let a = 0; a < inputWeight; a++) {
    gridRows.append("<td></td>");
  }

  let cell = pixelCanvas.find("td");

  // This allows the user to select color from picker
  
   cell.click(function () {

    let color = $("#colorPicker").val();

    if ($(this).attr("bgcolor")) {
      $(this).removeAttr("bgcolor");
    } else {
      $(this).attr("bgcolor", color);
    }
  });

}

$("#sizePicker").submit(function (event) {
  event.preventDefault();
  makeGrid();
});