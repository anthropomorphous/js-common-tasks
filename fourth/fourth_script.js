var dict = {
  0: "Воскресенье",
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота"
};

function returnDay() {
  const form = document.getElementById('dateForm')

  var firstNum = form.elements["first_num"];
  var secondNum = form.elements["second_num"];
  var output = document.getElementById('output');

  var date = new Date(2015, firstNum.value - 1, secondNum.value);
  var day = date.getDay();

  console.log(day)

  for (var key in dict) {
    if (key == day) {
      output.innerHTML = dict[key];
    }
  }
}
