//List of games or whaever
var list = ["btd5", "2048", "billiards", 'chibi knight', 'clicker heroes', 'dream car racing', 'giveuprobot2', 'duck life 2', 'duck life 3', 'duck life 4', 'escaping the prison', 'flappy bird', 'fleeing the complex', 'gba', 'geometry dash', 'getaway shootout', 'get on top', 'give up 2', 'gpemu', 'gun mayhem 2', 'happy wheels', 'idle web tycoon', 'impossible quiz', 'impossible quiz 2', 'infilterating the airship', 'jacksmith', 'learn to fly', 'learn to fly 2', 'learn to fly 3', 'legend of zelda', 'miragine war', 'multitask', 'obey the game', 'papas bakeria', 'papas donuteria', 'papas freezeria', 'papas pizzeria', 'papas scooperia', 'papas sushiria', 'papas wingeria', 'ping pong chaos', 'pokemon tower defense', 'qwop', 'raze 2', 'raze 3', 'rooftop snipers', 'run 3', 'sports heads basketball championship', 'sports heads soccer', 'sports heads tennis', 'sports heads volleyball', 'stealing the diamond', 'stick rpg', 'stick war', 'stick war 2', 'strike force heroes', 'strike force heroes 2', 'strike force heroes 3', 'superfighters', 'superfighters ultimate', 'super mario flash', 'super mario flash 2', 'super smash flash', 'swords and sandals 2', 'swords and souls', 'tank trouble', 'territory war', 'territory war', 'tetris', 'the last stand union city', 'theme hotel', 'unfair mario', 'uno', 'vex', 'zombocalypse'].sort();

var numOfRows = list.length/5;


var divCounter = 0;

for(var i = 0; i < list.length; i++){
  var box = document.createElement("div");
  var overlayDiv = document.createElement("div");
  var link = document.createElement('a');
  var image = document.createElement('img');




  link.href = list[i].replace(/ /g,'')+'.html';
  var imageLst = list[i].replace(/\s/g, "")
  image.setAttribute("src", "images/"+imageLst+".jpg");
  image.alt = list[i];

  overlayDiv.setAttribute('class', "overlay");
  overlayDiv.innerHTML = list[i].toUpperCase();

  link.appendChild(image);
  link.appendChild(overlayDiv);

  box.setAttribute('class', 'box');
  box.setAttribute('style', "display:block");
  box.appendChild(link);
if(i % 5 == 1){
  divCounter++;

}

var div = divCounter.toString()
  document.getElementById(div).appendChild(box);


}
