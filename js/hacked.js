function hackedBoxes () {
  // BTD5 Hacked
  document.getElementById("t1").innerHTML = "BTD5 Hacked";
  document.getElementById("i1").src = "images/btd5hacked.jpg";
  document.getElementById("d1").innerHTML = "Every time you start a level you will have infinite coins.";
  document.getElementById("b1").onclick = function () { btd5hacked(); };
  document.getElementById("a1").href = "games/btd5hacked.swf";
  // Impossible Quiz Hacked
  document.getElementById("t2").innerHTML = "Impossible Quiz Hacked";
  document.getElementById("i2").src = "images/impossiblequizhacked.png";
  document.getElementById("d2").innerHTML = "You have infinite skips.";
  document.getElementById("b2").onclick = function () { impossiblequizhacked(); };
  document.getElementById("a2").href = "games/impossiblequizhacked.swf";
  // Theme Hotel Hacked
  document.getElementById("t3").innerHTML = "Theme Hotel Hacked";
  document.getElementById("i3").src = "images/themehotelhacked.jpg";
  document.getElementById("d3").innerHTML = "Everything in the shop is free.";
  document.getElementById("b3").onclick = function () { themehotelhacked(); };
  document.getElementById("a3").href = "games/themehotelhacked.swf";
};
hackedBoxes();
