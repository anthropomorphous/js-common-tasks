// массив строк для ошибок
var warningMessagesContent = [
  'Число превышает допустимый диапазон'
];

function createWarningMessage(elem, text) {
  var warningMessage = document.createElement('span');
  warningMessage.innerHTML = text;
  warningMessage.className = 'warning-message';
  elem.parentNode.className = 'warning';
  elem.parentNode.appendChild(warningMessage);
};

function fibonacci(n) {
  var a = 1;
  var b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

var warningMessages = document.body.getElementsByClassName('warning-message');
while (warningMessages.length) {
  warningMessages[warningMessages.length - 1].parentNode.classList = '';
  warningMessages[warningMessages.length - 1].remove();
};

function validate() {
  var firstElem = document.getElementById('numOne');
  var secElem = document.getElementById('numTwo');
  var thirdElem = document.getElementById('numThree');

  first = parseInt(firstElem.value);
  second = parseInt(secElem.value);
  third = parseInt(thirdElem.value);

  const first_res = document.getElementById('first');
  const sec_res = document.getElementById('second');
  const third_res = document.getElementById('third');

  first_res.innerHTML = fibonacci(first);
  sec_res.innerHTML = fibonacci(second);
  third_res.innerHTML = fibonacci(third);

};
