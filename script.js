// Plain JavaScript
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

// By using Arrow Function
const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(2, 25));

//By using input fields and add button
document.getElementById('addBtn').onclick = function () {
  const num1 = parseFloat(document.getElementById('input1').value) || 0;
  const num2 = parseFloat(document.getElementById('input2').value) || 0;
  const sum = num1 + num2;
  // alert(sum);
  document.getElementById('addResult').textContent = 'Result: ' + sum;
};

// Call Back Function
function callBackFunction(some) {
  document.getElementById('demo').innerHTML = some;
}
function firstFunction() {
  callBackFunction('First Data');
}
function secondFunction() {
  callBackFunction('Second Data');
}
firstFunction();
// secondFunction();
