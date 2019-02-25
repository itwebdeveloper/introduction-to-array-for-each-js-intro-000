// Add your doToElementsInArray() function here:
function doToElementsInArray() {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(callback) {
  callback(value, index, array) {
    array[index] = "I changed " + array[index] + "!!!";
  }
}
