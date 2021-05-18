function validate() {
  const form = document.getElementById('numForm')

  var firstNum = form.elements["first_num"];
  var secondNum = form.elements["second_num"];
  var output = document.getElementById('output');

  var first = parseInt(firstNum.value)
  var second = parseInt(secondNum.value)

  if (first < second) {
    output.innerHTML = "Первое число меньше";
  } else if (first > second) {
    output.innerHTML = "Второе число меньше";
  } else {
    output.innerHTML = "Числа равны";
  }
};
