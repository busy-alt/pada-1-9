// 1. bolson
// let n = 31;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// 2.
// let n = 20;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

// 3. bolson
// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(n + "x" + i + "=" + n * i);
// }

// 4.
let n = 5;
for (let i = 0; 0 <= 5; i++) {
  let row = "*";
  let space = "";
  for (let j = 1; j <= i; j++) {
    row += "**";
  }
  for (let k = n - i; k > 0; k--) {
    space += " ";
  }
  console.log(space + row);
}

// 5.
// let n = 20;
// let prime = true;
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       prime = false;
//     }
//   }
//   if (prime === true) {
//     console.log(i);
//   }
//   prime = true;
// }
