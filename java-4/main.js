// // 1.
// const nunber1 = [4, 12, 7, 25, 10, 18];
// const result1 = nunber1.filter((num) => num > 10);
// console.log(result1);

// //2.
// const number2 = [3, 8, 11, 14, 20, 25, 32];
// const result2 = number2.filter((num) => num % 2 === 0);
// console.log(result2);

// // 3.
// const words1 = ["apple", "banana", "cat", "javascript", "book"];
// const result3 = words1.filter((word) => word.startsWith("a"));
// console.log(result3);

// // 4.
// const numbers3 = [5, 13, 22, 8, 35, 40];
// const result4 = numbers3.find((num) => num > 20);
// console.log(result4);

//5.
// const names1 = ["bat", "saraa", "munkh", "maral", "anu"];
// const result5 = names1.find((name) => name.startsWith("m"));
// console.log(result5);

// // 6.
// const number4 = [5, 12, 8, 20, 3];
// const result6 = number4.every((num) => num > 0);
// console.log(result6);

// //7.
// const words2 = ["apple", "book", "array", "code"];
// const result7 = words2.every((word) => word.length > 3);
// console.log(result7);

// //8.
// const numbers5 = [4, 8, -3, 12, 20];
// const result8 = numbers5.some((num) => num < 0);
// console.log(result8);

// //9.
// const words3 = ["cat", "programming", "book", "javascript"];
// const result9 = words3.some((word) => word.length > 10);
// console.log(result9);

// // 10.
// const numbers6 = [5, 18, 25, 60, 12, 45, 80];
// const filtered = numbers6.filter((num) => num > 15);
// const hasover50 = filtered.some((num) => num > 50);
// console.log(hasover50);

// let user = {
//   firstName: "Chingun",
//   lastname: "Chinzorig",
//   age: 18,
//   isStudent: false,
//   hobby: ["movies", "swimming", "reading"],
// };
// console.log(user.age);

// // 1.
// const user1 = {
//   name: "Bat",
//   age: 20
// };
// console.log(user1.name);

// //2.
// const user2 = {
//   name: "Saraa",
//   age: 19
// };
// user2.age = 25;
// console.log(user2.age);

// // 3.
// const user3 = {
//   name: "Anu",
//   age: 22,
// };
// user3.city = "ub";
// console.log(user3);

// //4.
// const user4 = {
//   name: "Bold",
//   age: 30,
//   city: "Дархан",
// };
// delete user4.age;
// console.log(user4);

// // 5.
// const user5 = {
//   name: "Temuulen",
//   age: 24,
// };
// console.log("name" in user5);

// // 6.
// const car = {
//   brand: "Toyota",
//   year: 2015,
// };
// console.log(car.brand);
// car.year = 2020;
// console.log(car);

// //7.
// const student = {
//   name: "Nomin",
//   age: 15,
// };
// student.grade = 10;
// console.log("grade" in student);

// //8.
// const phone = {
//   brand: "Samsung",
//   price: 3000000,
//   color: "Black"
// };
// phone.price = 2500000;
// delete phone.color;
// console.log(phone);

// //9.
// const book = {
//   title: "1984",
//   price: 35000,
// };
// console.log("author" in book);
// book.author = "george";
// console.log(book);

// //10.
// const person = {
//   name: "Munkh",
//   age: 23,
//   job: "Developer",
// };
// console.log(person.name);
// person.age = 26;
// person.city = "ub";
// delete person.job;
// console.log("city" in person);
// console.log(person);

// //1.
// const person = {
//   name: "Bat",
//   age: 25,
//   city: "Ulaanbaatar"
// };
// console.log(Object.keys(person));

// //2.
// const product = {
//   name: "Mouse",
//   price: 50000,
//   brand: "Logitech"
// };
// console.log(Object.values(product));

// //3.
// const car = {
//   brand: "Toyota",
//   model: "Prius",
//   year: 2018,
// };
// console.log(Object.entries(car));

// //4.
// const student = {
//   name: "Saraa",
//   age: 20,
//   grade: 12,
//   city: "Darkhan",
// };
// console.log(Object.keys(student).length);

// //5.
// const scores = {
//   math: 90,
//   english: 85,
//   physics: 89,
//   chemistry: 92,
// };
// let sum = 0;
// Object.values(scores).forEach((score) => {
//   sum += score;
// });
// console.log(sum);

// //6.
// const user = {
//   username: "bat123",
//   email: "bat@gmail.com",
//   age: 24,
// };
// Object.keys(user).forEach((key) => {
//   console.log(key);
// });

// //7.
// const inventory = {
//   apple: 10,
//   banana: 5,
//   orange: 0,
//   grape: 8,
// };
// const hasZero = Object.values(inventory).some((n) => n === 0);
// console.log(hasZero);

// //8.
// const employee = {
//   name: "Bold",
//   age: 27,
//   job: "Developer"
// };
// let entries = Object.entries(employee);

// //9.
// const prices = {
//   milk: 4500,
//   bread: 3500,
//   meat: 18000,
//   rice: 7000,
//   water: 2000,
// };
// const expensive = Object.entries(prices).filter(([Key, value]) => value > 5000);
// console.log(expensive);

// //10.
// const laptop = {
//   brand: "Dell",
//   ram: "16GB",
//   storage: "512GB",
//   cpu: "i7",
// };
// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));
// console.log(Object.entries(laptop));
// console.log(Object.keys(laptop).length);

let students = [
  { name: "Alice", age: 20, grades: [70, 80, 90] },

  { name: "Bob", age: 22, grades: [60, 65, 70] },

  { name: "Charlie", age: 23, grades: [80, 85, 90] },

  { name: "Dave", age: 21, grades: [50, 60, 55] },
];
students.filter((student) => {
  let sum = student.grades.reduce((a, b) => a + b);
  let average = sum / student.grades.length;
  if (average > 75) {
    console.log(student);
  }
});
