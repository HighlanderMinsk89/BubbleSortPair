const bubbleSort = arr => {
  // for (let i = 0; i < arr.length - 1; i++) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (compare(arr, j)) {
        swap(arr, j);
        swapped = true;
      }
      // console.log('on index', j, arr);
    }
  }
  return arr;
};

function swap(arr, index) {
  const temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

function compare(arr, index) {
  const first = arr[index];
  const second = arr[index + 1];
  return first > second;
}
