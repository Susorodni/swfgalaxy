function sportsBoxes() {
  // Sports Heads Basketball Championship
  document.getElementById("t1").innerHTML = "Sports Heads Basketball Championship";
  document.getElementById("i1").src = "images/shbc.jpeg";
  document.getElementById("b1").onclick = function () { sportsheadsbasketball(); };
  document.getElementById("a1").href = "games/sportsheadsbasketballchampionship.swf";
  // Sports Heads Tennis
  document.getElementById("t2").innerHTML = "Sports Heads Tennis";
  document.getElementById("i2").src = "images/sportsheadstennis.jpg";
  document.getElementById("b2").onclick = function () { sportsheadstennis(); };
  document.getElementById("a2").href = "games/sportsheadstennis.swf";
  // Sports Heads Volleyball
  document.getElementById("t3").innerHTML = "Sports Heads Volleyball";
  document.getElementById("i3").src = "images/sportsheadsvolleyball.jpg";
  document.getElementById("b3").onclick = function () { sportsheadsvolleyball(); };
  document.getElementById("a3").href = "games/sportsheadsvolleyball.swf";
}
sportsBoxes();
