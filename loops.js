function forLoop(array) {

  for (var i = 0; i < 25; i++) {
    if (i == 1) then {
      console.log("I am 1 strange loop.");
    } else {
      console.log(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop (number) {
  while (number >= 0) {
    console.log(number)

    number--
  }

  console.log("done")
}

function doWhileLoop (array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop

  } while (array.length > 0 && maybeTrue())

}
