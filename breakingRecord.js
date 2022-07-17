// Breaking the Records

let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let bestScore = arr[0];
let worstScore = arr[0];
let max = 0;
let min = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > bestScore) {
    bestScore = arr[i];
    max++;
  } else if (arr[i] < worstScore) {
    worstScore = arr[i];
    min++;
  }
}

console.log(max);
console.log(min);