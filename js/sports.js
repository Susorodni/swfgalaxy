function sportsBoxes() {
  // Billiards
  document.getElementById("t1").innerHTML = "Billiards";
  document.getElementById("i1").src = "images/billiards.jpg";
  document.getElementById("b1").onclick = function () { billiards(); };
  document.getElementById("a1").href = "games/billiards.swf";
  // Sports Heads Basketball Championship
  document.getElementById("t2").innerHTML = "Sports Heads Basketball Championship";
  document.getElementById("i2").src = "images/shbc.jpeg";
  document.getElementById("b2").onclick = function () { sportsheadsbasketball(); };
  document.getElementById("a2").href = "games/sportsheadsbasketballchampionship.swf";
  // Sports Heads Soccer
  document.getElementById("t3").innerHTML = "Sports Heads Soccer";
  document.getElementById("i3").src = "images/sportsheadssoccer.jpg";
  document.getElementById("b3").onclick = function () { sportsheadssoccer(); };
  document.getElementById("a3").href = "games/sportsheadssoccer.swf";
  // Sports Heads Tennis
  document.getElementById("t4").innerHTML = "Sports Heads Tennis";
  document.getElementById("i4").src = "images/sportsheadstennis.jpg";
  document.getElementById("b4").onclick = function () { sportsheadstennis(); };
  document.getElementById("a4").href = "games/sportsheadstennis.swf";
  // Sports Heads Volleyball
  document.getElementById("t5").innerHTML = "Sports Heads Volleyball";
  document.getElementById("i5").src = "images/sportsheadsvolleyball.jpg";
  document.getElementById("b5").onclick = function () { sportsheadsvolleyball(); };
  document.getElementById("a5").href = "games/sportsheadsvolleyball.swf";
}
sportsBoxes();
