// // 1.
// function sayHello() {
//   return "Сайн уу!";
// }
// let text = sayHello();
// console.log(text);

// // 2.
// function lol(width) {
//   return width * 2;
// }
// let asd = lol(3);
// console.log(asd);

// // 3.
// function lol(width) {
//   return width * width;
// }
// let asd = lol(3);
// console.log(asd);

// // 4.
// function lol(width, height) {
//   return width * height;
// }
// let asd = lol(3, 2);
// console.log(asd);

// // 5.
// function lol(width, height) {
//   return 2 * (width + height);
// }
// let asd = lol(3, 2);
// console.log(asd);

// // 8.
// function lol(width) {
//   return width * 60;
// }
// let asd = lol(3);
// console.log(asd);

// // 9.
// function lol(width) {
//   return (width * 9) / 5 + 32;
// }
// let asd = lol(3);
// console.log(asd);

// // 1.
// function score(secret) {
//   if (secret === 42) {
//     return "zuv";
//   }
//   return "buruu";
// }
// console.log(score(42));

// // 2.
// function discount(price, percent) {
//   return (price / 100) * percent;
// }
// // console.log(discount(123123, 15));

// //3.
// function finalprice(price, percent) {
//   return price - discount(price, percent);
// }
// console.log(finalprice(12412412312, 15));

// // 4.
// function minofthree(a, b, c) {
//   let min = a;
//   if (b < min) min = b;
//   if (c < min) min = c;
//   return min;
// }
// console.log(minofthree(7, 5, 6));

// // 5.
// function minofthree(a, b, c) {
//   let min = a;
//   if (b > min && c < min) min = a;
//   if (a > b && c < b) min = b;
//   if (a > c && b < c) min = c;
//   return min;
// }
// console.log(minofthree(12, 16, 9));

// // 6.
// function minofthree(a) {
//   let min = a;
//   if (min >= 90) min = "a";
//   if (min >= 80) min = "b";
//   if (min >= 70) min = "c";
//   if (min >= 60) min = "d";
//   if (min <= 60) min = "f";
//   return min;
// }
// console.log(minofthree(100));

// // 7.
// function calculatePrice(price, discount = 0, tax = 10) {
//   let discountedPrice = price - (price * discount) / 100;
//   let finalPrice = discountedPrice + (discountedPrice * tax) / 100;
//   return finalPrice;
// }
// console.log(calculatePrice(1000));

// // 8.
// function isLeapYear(year) {
//   let isLeapYear = false;
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         isLeapYear = true;
//       }
//     }
//   }
//   return isLeapYear;
// }
// console.log(isLeapYear(2000));

// // 9.
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(0));

// // 10.
// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       if (b === 0) {
//         return "cant devide by 0!";
//       }
//       return a / b;

//     default:
//       return "wrong";
//   }
// }
// console.log(calculator(10, 5, "-"));

// // 1.
// let scores = [80, 90, 75, 85, 95];
// let = 0;
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }
// let avg = sum / scores.length;
// console.log("niilber:", sum);
// console.log("dundaj:", avg;

// // 1.
// const number = [42, 7, 88, 15, 63, 29, 91, 4, 56, 73];
// let max = number[0];
// for (const item of number) {
//   if (item > max) {
//     max = item;
//   }
// }
// console.log(max);

// 2.
