function cookingBoxes() {
  // Papa's Bakeria
  document.getElementById("t1").innerHTML = "Papa's Bakeria";
  document.getElementById("i1").src = "images/papasbakeria.jpeg";
  document.getElementById("b1").onclick = function () { papasbakeria(); };
  document.getElementById("a1").href = "games/papasbakeria.swf";
  // Papa's Donuteria
  document.getElementById("t2").innerHTML = "Papa's Donuteria";
  document.getElementById("i2").src = "images/papasdonuteria.jpeg";
  document.getElementById("b2").onclick = function () { papasdonuteria(); };
  document.getElementById("a2").href = "games/papasdonuteria.swf";
  // Papa's Freezeria
  document.getElementById("t3").innerHTML = "Papa's Freezeria";
  document.getElementById("i3").src = "images/papasfreezeria.jpg";
  document.getElementById("i3").style = "max-height:90%;max-width:90%";
  document.getElementById("b3").onclick = function () { papasfreezeria(); };
  document.getElementById("a3").href = "games/papasfreezeria.swf";
  // Papa's Scooperia
  document.getElementById("t4").innerHTML = "Papa's Scooperia";
  document.getElementById("i4").src = "images/papasscooperia.jpg";
  document.getElementById("b4").onclick = function () { papasscooperia(); };
  document.getElementById("a4").href = "games/papasscooperia.swf";
  // Papa's Sushiria
  document.getElementById("t5").innerHTML = "Papa's Sushiria";
  document.getElementById("i5").src = "images/papassushiria.jpg";
  document.getElementById("b5").onclick = function () { papassushiria(); };
  document.getElementById("a5").href = "games/papassushiria.swf";
}
cookingBoxes();
