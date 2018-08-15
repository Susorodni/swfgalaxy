function loadBoxes() 
  // Box 1
  document.getElementById("box1text").innerHTML = "BTD5"
  document.getElementById("box1img").src = "images/btd5.jpg"
  document.getElementById("box1button").onclick = btd5;
  // Box 2
  document.getElementById("box2text").innerHTML = "Duck Life 4"
  document.getElementById("box2img").src = "images/ducklife4.jpeg"
  document.getElementById("box2button").onclick = ducklife4;
}
window.onload = loadBoxes;
