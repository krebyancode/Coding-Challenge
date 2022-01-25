function slidingWindow(arr, k) {
  const range = arr.length - k + 1;
  const max = [];
  for (i = 0; i < range; i++) {
    let arrUsed = arr.slice(i, i + 3);
    max.push(Math.max(...arrUsed));
    arrUsed = [];
  }
  return max;
}

// let arr = [10, 5, 2, 7, 8, 7];
let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(slidingWindow(arr, k));
