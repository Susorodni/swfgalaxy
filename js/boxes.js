function loadBoxes() {
  document.getElementById("box1text").innerHTML = "BTD5"
  document.getElementById("box1img").src = "images/btd5.jpg"
  document.getElementByClassName("box1button").href = "javascript:btd5()"
}
window.onload = loadBoxes;
