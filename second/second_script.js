function validate() {

  var floors = document.getElementById('floors')
  var entrances = document.getElementById('entrances')
  var flats_per_floor = document.getElementById('flats_per_floor')
  var flat_num = document.getElementById('flat_num')

  var output = document.getElementById('output');

  var floors_n = parseInt(floors.value)
  var entrances_n = parseInt(entrances.value)
  var flats_n = parseInt(flats_per_floor.value)
  var flat_n = parseInt(flat_num.value)

  if (flat_n > flats_n*entrances_n*floors_n) {
    output.innerHTML = "В этом доме нет такой квартиры!"
  }
  else {
    if (flat_n % (flats_n*floors_n) != 0) {
      output.innerHTML = Math.trunc(flat_n /(flats_n*floors_n) + 1)
    }
    else {
      output.innerHTML = Math.trunc(flat_n /(flats_n*floors_n))
    }
  }
};
