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

function removeWarningMessage() {
  console.log('remove!!!');
}

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


//удаление предупреждений
var warningMessages = document.body.getElementsByClassName('warning-message');
while (warningMessages.length) {
  warningMessages[warningMessages.length - 1].parentNode.classList = '';
  warningMessages[warningMessages.length - 1].remove();
};

function validate() {
  const form = document.getElementById('x');
  var table = document.getElementById("myTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j+3) {
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
     first_res.innerHTML = fibonacci(form.elements["numOne"].value);
   }
}
  const first_res = document.getElementById('first');
  const sec_res = document.getElementById('second');
  const third_res = document.getElementById('third');

  var firstNum = form.elements["first_num"];

  first_res.innerHTML = fibonacci(form.elements["numOne"].value);
  sec_res.innerHTML = fibonacci(form.elements["numTwo"].value);
  third_res.innerHTML = fibonacci(form.elements["numThree"].value);

  for (var i = 0; i < form.elements.length; i++) {
    // удаляем сообщение об ошибке
    removeWarningMessage(form.elements[i]);

    // если нет значения в строке, создаётся сообщение об ошибке
    if (!form.elements[i].value) {
      createWarningMessage(form.elements[i], warningMessagesContent[i]);
      continue;
    };

    //alert(fibonacci(form.elements[i].value));

  };
};
