// Select size input
const height = $('#inputHeight');
const width = $('#inputWidth');
const canvasD = document.getElementById('pixelCanvas');
const canvasJ = $('#pixelCanvas');
const artwork = $('#artwork');

// access the properties of "eraser" button
const eraser = document.getElementById('eraser');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on("click", function(event){
  //Clear the former grid
  canvasJ.children().remove();
  event.preventDefault();
  createGrid();
  let bgColor = $("#bgcolorPicker").val();
  $("table, tr, td").css("background-color", bgColor);
});

//create Grid function
function createGrid() {
  for (let i = 0; i<height.val(); i++) {
    const row = canvasD.insertRow(i);
    $("tr").addClass("rowCl");
    for (let j = 0; j<width.val(); j++) {
      const cell = row.insertCell(j);
      $("td").addClass("cellCl");
    }
  // calculating width and length of canvas and setting it in stylesheet so that it does not deform when we change the size of browser window
  const tbWidth = width.val()*20 +"px";
  $("table").css("width", tbWidth);
  const tbHeight = height.val()*20 +"px";
  $("table").css("height", tbHeight);
  }
};


//color cell
canvasJ.on("click", 'td', function(e) {
  e.preventDefault();
  // Select color input
  let color = $('#colorPicker').val();
  $(this).css("background-color", color);
});

//uncolor cell on double click
canvasJ.on("dblclick", 'td', function(e){
  e.preventDefault();
  const bgColor = $("#bgcolorPicker").val();
  $(this).css("background-color", bgColor);
});

// draw when pressing mouse down
canvasJ.on("mousedown mouseover",'td', function(e) {
  e.preventDefault();
  let color = $('#colorPicker').val();
  if (e.buttons == 1) {
  $(this).css("background-color", color);}
});


// clear canvas
$('#clearCanvas').on("click", function() {
  if (confirm("Are you sure you want to clear your artwork?")) {
    const bgColor = $("#bgcolorPicker").val();
    $("table, tr, td").css("background-color", bgColor);
  }
});


//eraser
let clickCount = 0;
$('#eraser').on("click", function(e) {
  e.preventDefault();
  clickCount ++;

  if (clickCount%2==1) {
    canvasJ.on("click", 'td', function(event) {
    event.preventDefault();
    const bgColor = $("#bgcolorPicker").val();
    $(this).css("background-color", bgColor);
    });
  }
  else {
    canvasJ.on("click", 'td', function(e) {
    e.preventDefault();
    let color = $('#colorPicker').val();
    $(this).css("background-color", color);
    });
  }
});

// eraser on press down

let clickCount0 = 0;
$('#eraser').on("click", function(e) {
  e.preventDefault();
  clickCount0 ++;

  if (clickCount0%2==1) {
    canvasJ.on("mousedown mouseover",'td', function(e) {
    e.preventDefault();
    let bgColor = $("#bgcolorPicker").val();
    if (e.buttons == 1) {
      $(this).css("background-color", bgColor);}
    });
  }
  else {
    canvasJ.on("mousedown mouseover",'td', function(e) {
    e.preventDefault();
    let color = $('#colorPicker').val();
      if (e.buttons == 1) {
    $(this).css("background-color", color);}
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


 //hide grid
let clickCount3 = 0;
$('#grid').on("click", function(e) {
  e.preventDefault();
  clickCount3 ++;

  if (clickCount3%2==1) {
      $("table, tr, td").css("border", "none");
    } else {
      $("table, tr, td").css("border", "1px solid black");
    }
});


//hide grid button
let clickCount4 = 0;
$('#grid').on("click", function(e) {
  e.preventDefault();
  clickCount4 ++;
  // change button color once "on"
  if (clickCount4%2==1) {
    $(this).addClass("turnedOn");
  } else{
    $(this).removeClass("turnedOn");
  };
});

// PREVIEW & DOWNLOAD
//code source adapted from: codepedia.info

$(document).ready(function(){
  const element = $("#html-content-holder"); // global variable
  var getCanvas; // global variable
  const btnPrev = $("#btnPrev");
  const dwnld = $("#dwnld");
  const prev = $("#prev");
  const prevImg = $("#previewImage");

 btnPrev.on('click', function () {
   //Clear the former grid
  prev.children().remove();
  prevImg.children().remove();
    html2canvas(element, {
      onrendered: function (canvas) {
        prev.append("<h3>Preview :</h3>");
        prevImg.append(canvas);
        getCanvas = canvas;
      }
    });
  });

	dwnld.on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    dwnld.attr("download", "yourPixelArt.png").attr("href", newData);
	});
});
