let mylist = document.getElementById("mylist");
let ausgabe = document.getElementById("masse");

function showtxt() {
  console.log(mylist);

  let wert = mylist.value;
  console.log(wert);

  switch (true) {
    case wert == 0:
      ausgabe.innerHTML = ` <b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm`;
      break;
    case wert == 1:
      ausgabe.innerHTML = ` <b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm`;
      break;
    case wert == 2:
      ausgabe.innerHTML = ` <b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
    case wert == 3:
      ausgabe.innerHTML = ` <b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
    default:
      ausgabe.innerHTML = ` "<b>Extra große Größe</b>`;
      break;
  }
}
