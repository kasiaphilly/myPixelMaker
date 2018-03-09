// Select size input
const height = $('#inputHeight').val();
const width = $('#inputWidth').val();
const canvas = document.getElementById('pixelCanvas');

// access the properties of "eraser" button
const eraser = document.getElementById('eraser');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on("click", function(event){
  //Clear the former grid
  $("#pixelCanvas").children().remove();
  event.preventDefault();
  createGrid();
  let bgColor = $("#bgcolorPicker").val();
  $("table, tr, td").css("background-color", bgColor);

// calculating width and length of canvas and setting it in stylesheet so that it does not deform when we change the size of browser window
  const tbWidth = $('#inputWidth').val()*20 +"px";
  $("table").css("width", tbWidth);
  const tbHeight = $('#inputHeight').val()*20 +"px";
  $("table").css("height", tbHeight);
});

//create Grid function
function createGrid() {
  for (let i = 0; i<$('#inputHeight').val(); i++) {
    const row = canvas.insertRow(i);
    $("tr").addClass("rowCl");
    for (let j = 0; j<$('#inputWidth').val(); j++) {
      const cell = row.insertCell(j);
      $("td").addClass("cellCl");
    }
  }
};


//color cell
$('#pixelCanvas').on("click", 'td', function(e) {
  e.preventDefault();
  // Select color input
  let color = $('#colorPicker').val();
  $(this).css("background-color", color);
});

// clear canvas
$('#clearCanvas').on("click", function() {
 const bgColor = $("#bgcolorPicker").val();
 $("table, tr, td").css("background-color", bgColor);
});

//eraser
let clickCount = 0;
$('#eraser').on("click", function(e) {
  e.preventDefault();
  clickCount ++;

  if (clickCount%2==1) {
    $('#pixelCanvas').on("click", 'td', function(event) {
    event.preventDefault();
    const bgColor = $("#bgcolorPicker").val();
    $(this).css("background-color", bgColor);
    });
  } else {
    $('#pixelCanvas').on("click", 'td', function(e) {
    e.preventDefault();
    let color = $('#colorPicker').val();
    $(this).css("background-color", color);
    });
  }
});

//eraser button
let clickCount1 = 0;
$('#eraser').on("click", function(e) {
  e.preventDefault();
  clickCount1 ++;
  // change eraser button color once "on"
  if (clickCount1%2==1) {
    $(this).addClass("turnedOn");
  } else{
    $(this).removeClass("turnedOn");
  };
  });
