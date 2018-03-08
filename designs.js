// Select size input
const height = $('#inputHeight').val();
const width = $('#inputWidth').val();
const canvas = document.getElementById('pixelCanvas');

// access the properties of "eraser" button
const eraser = document.getElementById('eraser');

// submit field size
$('#fieldSize').on("click", function(event){
  event.preventDefault();
  let fieldSq = $('fieldPx').val() + "px";
  $('tr').css('height', fieldSq);
  $('td').css('width', fieldSq);
});


// When size is submitted by the user, call makeGrid()
$('#sizePicker').on("click", function(event){
  //Clear the former grid
  $("#pixelCanvas").children().remove();
  event.preventDefault();
  createGrid();
  let bgColor = $("#bgcolorPicker").val();
  $("table, tr, td").css("background-color", bgColor);

// calculating width and length of canvas and setting it in stylesheet so that it does not deform when we change the size of browser window
  const tbWidth = height*20 +"px";
  $("table").css("width", tbWidth);
  const tbHeight = width*20 +"px";
  $("table").css("height", tbHeight);
});

//create Grid function
function createGrid() {
  for (let i = 0; i<height; i++) {
    let row = canvas.insertRow(i);
    $("tr").addClass("rowCl");
    for (let j = 0; j<width; j++) {
      let cell = row.insertCell(j);
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
