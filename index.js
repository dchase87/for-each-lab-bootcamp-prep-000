function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var cats = ['Walt', 'Jones', 'Mr. Pussy'];
  cats.forEach(callback);
  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}
