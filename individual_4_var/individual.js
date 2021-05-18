function validate() {
  const form = document.getElementById('strForm')

  var firstStr = document.getElementById("first_str");
  var secondStr = document.getElementById("second_str");
  var num = document.getElementById("num");

  var output = document.getElementById('output');

  var first = firstStr.value;
  var second = secondStr.value;
  var index = parseInt(num.value)

  firstPart = first.substring(0, index);
  secondPart = first.substring(index);

  output.innerHTML = (firstPart + second + secondPart);
};
