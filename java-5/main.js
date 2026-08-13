// function nemeh() {
//   const input1 = document.getElementById("input1");
//   const input2 = document.getElementById("input2");
//   const result = document.getElementById("result");

//   result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// }
// function hasah() {
//   const input1 = document.getElementById("input1");
//   const input2 = document.getElementById("input2");
//   const result = document.getElementById("result");

//   result.innerHTML = parseInt(input1.value) - parseInt(input2.value);
// }
// function urjih() {
//   const input1 = document.getElementById("input1");
//   const input2 = document.getElementById("input2");
//   const result = document.getElementById("result");

//   result.innerHTML = parseInt(input1.value) * parseInt(input2.value);
// }
// function huvaah() {
//   const input1 = document.getElementById("input1");
//   const input2 = document.getElementById("input2");
//   const result = document.getElementById("result");

//   result.innerHTML = parseInt(input1.value) / parseInt(input2.value);
// }

const display = document.getElementById("display");
function appendValue(input) {
  display.innerHTML += input;
  console.log("buton");
}

function positive() {
  display.innerHTML = display.innerHTML * -1;
}

function clearDisplay() {
  display.innerHTML = "";
}
function calculate() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.value = "Error";
  }
}
