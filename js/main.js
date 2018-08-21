function loadBoxes () {
    // Box 1 
    document.getElementById("t1").innerHTML = "BTD5";
    document.getElementById("i1").src = "images/btd5.jpg";
    document.getElementById("b1").onclick = function () { btd5(); };
    // Box 2
    document.getElementById("t2").innerHTML = "Duck Life 4";
    document.getElementById("i2").src = "images/ducklife-4.jpeg";
    document.getElementById("b2").onclick = function () { ducklife4(); };
    // Box 3
    document.getElementById("t3").innerHTML = "Flappy Bird";
    document.getElementById("i3").src = "images/flappybird.jpg";
    document.getElementById("b3").onclick = function () { flappybird(); };
    // Box 4
    document.getElementById("t4").innerHTML = "Geometry Dash";
    document.getElementById("i4").src = "images/geometrydash.jpg";
    document.getElementById("b4").onclick = function () { geodash(); };
    // Box 5
}
window.onload = loadBoxes
function btd5 () {
        location.href = "btd5.html";
};
function ducklife4 () {
        location.href = "ducklife4.html";
};
function flappybird () {
        location.href = "flappybird.html";
};
function geodash () {
        location.href = "geometrydash.html";
};
document.getElementById("giveup2").onclick = function () {
        location.href = "giveup2.html";
};
document.getElementById("happywheels").onclick = function () {
        location.href = "happywheels.html";
};
document.getElementById("jacksmith").onclick = function () {
        location.href = "jacksmith.html";
};
document.getElementById("learntofly3").onclick = function () {
        location.href = "learntofly3.html";
};
document.getElementById("papasbakeria").onclick = function () {
        location.href = "papasbakeria.html";
};
document.getElementById("papasdonuteria").onclick = function () {
        location.href = "papasdonuteria.html";
};
document.getElementById("pokemontowerdefense").onclick = function () {
        location.href = "pokemontowerdefense.html";
};
document.getElementById("strikeforceheroes").onclick = function () {
        location.href = "strikeforceheroes.html";
};
document.getElementById("strikeforceheroes2").onclick = function () {
        location.href = "strikeforceheroes2.html";
};
document.getElementById("sportsheads").onclick = function () {
        location.href = "sportsheadsbasketballchampionship.html";
};
document.getElementById("supersmashflash").onclick = function () {
        location.href = "supersmashflash.html";
};
document.getElementById("swordsandsandals2").onclick = function () {
        location.href = "swordsandsandals2.html";
};
document.getElementById("tanktrouble").onclick = function () {
        location.href = "tanktrouble.html";
};
document.getElementById("zombo").onclick = function () {
        location.href = "zombocalypse.html";
};
