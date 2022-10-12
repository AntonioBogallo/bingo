function createDiv(content, className) {
  const div = document.createElement("div");
  div.textContent = content;
  div.classList.add(className);
  return div;
}

function generateArray(min, max) {
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
}

function disorderArray(array) {
  const arrayCopy = array.slice();
  // Fisher Yates shuffle method
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const k = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = k;
  }
  return arrayCopy;
}

export { createDiv, generateArray, disorderArray };
