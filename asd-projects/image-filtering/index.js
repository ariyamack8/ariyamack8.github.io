// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(decreaseBlue);
 applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilter(reddify);
applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var row = 0; row < image.length; row += 1) {
    var currentArray = image[row];
    for (var col = 0; col < currentArray.length; col += 1) {
      var pixel = image[row][col];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      pixelArray[RED] = 200;
      var updatedPixel = rgbArrayToString(pixelArray);
      image[row][col] = updatedPixel; console.log(image[row][col])
    }
  }
}
// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
    for (var row = 0; row < image.length; row += 1) {
    var currentArray = image[row];
    for (var col = 0; col < currentArray.length; col += 1) {
      var pixel = image[row][col];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
    if (image[row][col] !== backgroundColor) {
      filterFunction(pixelArray)
      image[row][col] = rgbArrayToString(pixelArray)
    }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 50);
}
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] += pixelArray[BLUE]
}